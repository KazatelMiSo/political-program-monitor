import Link from 'next/link';
import { partyThemes, PartyKey } from '../theme/partyThemes';

export default function HomePage() {
  const parties: PartyKey[] = Object.keys(partyThemes).filter(
    (key) => key !== 'default'
  ) as PartyKey[];
  return (
    <main className="min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Political Program Monitor</h1>
      <p className="mb-2">
        Vyberte stranu pro zobrazení programu, slibů a plnění:
      </p>
      <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {parties.map((party) => (
          <li key={party} className="border rounded-xl p-4 shadow hover:shadow-md transition">
            <Link href={`/${party}`}>{party.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
