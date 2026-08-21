import { client } from '@/sanity/lib/client'
import { sortieBySlugQuery } from '@/sanity/lib/queries'

export default async function TestPage({ params }: any) {
  const { slug } = await params
  const sortie = await client.fetch(sortieBySlugQuery, { slug })

  return (
    <div style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>DEBUG PAGE</h1>
      <h2>Sortie : {sortie?.titrePersonnalise || sortie?.sejour?.title}</h2>
      <p>Date : {sortie?.dateDebut}</p>
      <p>Prix : {sortie?.prix}</p>
      <p>Lieu RDV : {sortie?.lieuRdv}</p>

      <hr style={{ margin: '40px 0' }} />

      <h3>Programme spécifique :</h3>
      <pre>{JSON.stringify(sortie?.programmeSpecifique, null, 2)}</pre>

      <hr style={{ margin: '40px 0' }} />

      <h3>Informations complémentaires :</h3>
      <pre>{JSON.stringify(sortie?.informationsComplementaires, null, 2)}</pre>

      <hr style={{ margin: '40px 0' }} />

      <h3>Toutes les données :</h3>
      <pre style={{ fontSize: '10px', overflow: 'auto' }}>
        {JSON.stringify(sortie, null, 2)}
      </pre>
    </div>
  )
}
