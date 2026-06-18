'use client';

import { Loader2, Star } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface Opinion {
  name: string | null;
  date: string | null;
  opinion: string | null;
}

interface OpinionsProps {
  isLoading: boolean;
  error: boolean;
  opinions: Array<Opinion> | null;
}

const predefinedComments: Opinion[] = [
  {
    name: 'Natalia',
    opinion: 'Super dietetyczka, uśmiechnięta, szczegółowa, bardzo miło się rozmawiało, gabinet też ładny jeśli dla kogoś to ważne :)',
    date: '1 lipca 2025',
  },
  {
    name: 'Monika',
    opinion: 'Pani Dietetyk Monika poświęciła mi dużo czasu, zadawała dużo pytań, szukała rozwiązania, a nawet kilka by mi pomóc. Wizyta bardzo udana i polecam.',
    date: '28 maja 2025',
  },
  {
    name: 'Adam',
    opinion: 'Wszystko było dobrze miała pani do mnie cierpliwości',
    date: '19 maja 2025',
  },
  {
    name: 'Szpic777',
    opinion: 'Czuję się zaopiekowany, wysłuchany i potraktowany na poważnie. Polecam specjalistkę!',
    date: '30 kwietnia 2025',
  },
  {
    name: 'Karolina',
    opinion: 'Do Pani Moniki pierwszy raz trafiłam trzy lata temu i dziś wróciłam kolejny raz. Wizyta była bardzo szczegółowo omówiona, z uśmiechem i pełnym zrozumieniem. Pani Monika dokładnie wszystko przeanalizowała i skrupulatnie wyjaśniła. Wracam, bo są efekty i dlatego, że jest dbałość o każdy szczegół. Polecam!',
    date: '13 marca 2025',
  },
  {
    name: 'Sylwia',
    opinion: 'Bardzo profesjonalne i przyjazne podejście do pacjenta. Serdecznie polecam!',
    date: '17 lutego 2025',
  },
];

function OpinionCard({ comment }: { comment: Opinion }) {
  return (
    <div className="flex flex-col rounded-xl bg-white p-6 shadow-md border-2 border-[var(--trainer-secondary)] h-full">
      <div className="flex items-center gap-3 mb-4">
        <Avatar className="h-10 w-10">
          <AvatarFallback
            className="text-white text-sm font-semibold"
            style={{ backgroundColor: 'var(--trainer-accent)' }}
          >
            {comment.name?.charAt(0) ?? '?'}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-sm" style={{ color: 'var(--trainer-primary)' }}>
            {comment.name ?? ''}
          </p>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3 w-3" style={{ color: 'var(--trainer-accent)' }} fill="currentColor" />
            ))}
          </div>
        </div>
      </div>
      <p className="flex-1 italic text-sm leading-relaxed line-clamp-6" style={{ color: 'var(--trainer-text-light)' }}>
        &ldquo;{comment.opinion ?? ''}&rdquo;
      </p>
      <p className="text-xs mt-4 text-right" style={{ color: 'var(--trainer-text-light)' }}>
        {comment.date ?? ''}
      </p>
    </div>
  );
}

export default function Opinions({ isLoading, error, opinions }: OpinionsProps) {
  const comments =
    isLoading || error || !opinions || opinions.length === 0 ? predefinedComments : opinions;

  return (
    <section className="py-12 md:py-20 px-6" style={{ backgroundColor: 'var(--trainer-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-8 md:mb-12" style={{ color: 'var(--trainer-primary)' }}>
          Opinie pacjentów
        </h2>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-12 w-12 animate-spin" style={{ color: 'var(--trainer-accent)' }} />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {comments.map((comment, index) => (
              <OpinionCard key={index} comment={comment} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
