import type { Opinion } from '@/lib/fetch-opinions';

interface OpinionsProps {
  opinions: Opinion[];
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

export default function Opinions({ opinions }: OpinionsProps) {
  const comments = opinions.length > 0 ? opinions : predefinedComments;
  if (comments.length === 0) return null;

  return (
    <section className="bg-[var(--dh-ink)] text-white">
      <div className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 md:py-24">
        <h2 className="font-display text-4xl leading-tight md:text-[3.25rem] md:leading-[1.1]">Opinie pacjentów</h2>
        <ul className="mt-14 gap-12 md:columns-2 lg:columns-3">
          {comments.map((comment, index) => (
            <li key={index} className="mb-11 break-inside-avoid border-l-2 border-[var(--dh-teal)] pl-6">
              <figure>
                <blockquote className="text-[1.0625rem] leading-relaxed text-white/90">
                  &bdquo;{comment.opinion ?? ''}&rdquo;
                </blockquote>
                <figcaption className="mt-3.5 text-sm text-white/70">
                  <strong className="font-semibold text-white">{comment.name ?? ''}</strong>
                  {comment.date ? `, ${comment.date}` : null}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
