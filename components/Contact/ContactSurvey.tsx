'use client';

import type React from 'react';
import { useRef, useState } from 'react';
import Script from 'next/script';
import emailjs from '@emailjs/browser';
import dayjs from 'dayjs';
import { CalendarDays } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

export default function ContactSurvey() {
  const [loading, setLoading] = useState(false);
  const currentDate = new Date();
  // Calculate the date in GMT+1 timezone
  const consultationDate = new Date(currentDate.getTime() + 14 * 24 * 60 * 60 * 1000);
  const [selectedDate, setSelectedDate] = useState<Date>(consultationDate);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const forma = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formElement = forma.current;
    if (!formElement) return;

    const monthNames = [
      'Styczeń',
      'Luty',
      'Marzec',
      'Kwiecień',
      'Maj',
      'Czerwiec',
      'Lipiec',
      'Sierpień',
      'Wrzesień',
      'Październik',
      'Listopad',
      'Grudzień',
    ];
    const day = selectedDate.getDate();
    const month = monthNames[selectedDate.getMonth()];
    const year = selectedDate.getFullYear();
    const formattedDate2 = `${day.toString().padStart(2, '0')} ${month} ${year}`;

    // Set the formatted date in a hidden input
    const dateInput = formElement.querySelector('input[name="date"]') as HTMLInputElement;
    if (dateInput) {
      dateInput.value = formattedDate2;
    }

    setLoading(true);

    if (
      process.env.NEXT_PUBLIC_SERVICE_ID &&
      process.env.NEXT_PUBLIC_TEMPLATE_SURVEY_ID &&
      process.env.NEXT_PUBLIC_MAIL_JS_KEY
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_SURVEY_ID,
          formElement,
          process.env.NEXT_PUBLIC_MAIL_JS_KEY
        )
        .then(
          (response) => {
            toast.success('Wysłano', {
              description: 'Dziękuję za wypełnienie ankiety, do zobaczenia na konsultacji.',
              style: {
                background: '#10b981',
                color: 'white',
                border: '1px solid #059669',
              },
            });
            formElement.reset();
            setLoading(false);
          },
          (error) => {
            toast.error('Coś poszło nie tak.', {
              description: 'Proszę o kontakt z administratorem.',
              style: {
                background: '#ef4444',
                color: 'white',
                border: '1px solid #dc2626',
              },
            });
            setLoading(false);
          }
        );
    }
  };

  const formatDate = (date: Date) => {
    return dayjs(date).format('DD MMM YYYY');
  };

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js" />
      <div className="rounded-lg bg-white/95 p-6 shadow-lg backdrop-blur-sm dark:bg-gray-900/95 sm:p-8">
        <div className="mb-6 text-center">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Jesteś umówiony na konsultację? Wypełnij wstępną ankietę:
          </h2>
        </div>

        <form ref={forma} onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Imię i nazwisko
            </Label>
            <Input id="name" name="name" placeholder="Jan Kowalski" required className="w-full" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="twoj_email@email.com"
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">Data konsultacji</Label>
            <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn('w-full justify-start text-left font-normal', !selectedDate && 'text-muted-foreground')}
                >
                  <CalendarDays className="mr-2 h-4 w-4" />
                  {selectedDate ? formatDate(selectedDate) : 'Wybierz datę'}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => {
                    if (date) {
                      setSelectedDate(date);
                      setIsCalendarOpen(false);
                    }
                  }}
                  disabled={(date) => {
                    const today = dayjs().startOf('day').toDate();
                    const maxDate = dayjs().add(2, 'month').endOf('day').toDate();
                    return date < today || date > maxDate;
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <input type="hidden" name="date" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="purpose" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Cel porady
            </Label>
            <Input
              id="purpose"
              name="purpose"
              placeholder="Jaki jest powód/cel porady dietetycznej?"
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="problems" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Problemy
            </Label>
            <Textarea
              id="problems"
              name="problems"
              placeholder="Proszę wypisać problemy zdrowotne/choroby (np. cukrzyca, insulinooporność, nadciśnienie tętnicze, zespół jelita drażliwego, anemia)"
              required
              rows={5}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="drugs" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Leki
            </Label>
            <Input
              id="drugs"
              name="drugs"
              placeholder="Proszę wymienić przyjmowane leki."
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="supplements" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Suplementy diety
            </Label>
            <Input
              id="supplements"
              name="supplements"
              placeholder="Proszę wymienić przyjmowane suplementy diety."
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="intolerances" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Nietolerancje
            </Label>
            <Input
              id="intolerances"
              name="intolerances"
              placeholder="Czy ma Pani/Pan stwierdzone alergie lub nietolerancje pokarmowe?"
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ailments" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Dolegliwości
            </Label>
            <Textarea
              id="ailments"
              name="ailments"
              placeholder="Czy ma Pani/Pan dolegliwości ze strony układu pokarmowego? (np. bóle brzucha, wzdęcia, biegunki, zaparcia, zgaga, nudności)"
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="liquids" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Płyny
            </Label>
            <Input
              id="liquids"
              name="liquids"
              placeholder="Jakie płyny Pani/Pan wypija w ciągu dnia i w jakich ilościach?"
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="diet" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Obecna dieta
            </Label>
            <Textarea
              id="diet"
              name="diet"
              placeholder="Proszę opisać, jak do tej pory wyglądały Pani/Pana posiłki. Proszę wymienić kilka przykładowych śniadań, drugich śniadań, obiadów itd."
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="not_liked" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Produkty lub dania których nie lubisz
            </Label>
            <Textarea id="not_liked" name="not_liked" placeholder="Jarmuż ..." required className="w-full" />
          </div>

          <div className="flex justify-end pt-4">
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Wysyłanie...
                </>
              ) : (
                'Wyślij'
              )}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
