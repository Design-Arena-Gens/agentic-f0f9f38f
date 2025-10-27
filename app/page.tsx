export default function Page() {
  return (
    <main className="container">
      <section className="hero">
        <h1>Agentic Next.js Starter</h1>
        <p>App Router, TypeScript, ready for Vercel.</p>
        <div className="cta">
          <a className="button" href="https://nextjs.org/docs">Read Next.js Docs</a>
          <a className="button secondary" href="https://vercel.com/docs">Deploy with Vercel</a>
        </div>
      </section>
      <section className="grid">
        <Card title="Fast" body="Optimized by default with Next.js"/>
        <Card title="Typed" body="TypeScript strict mode enabled"/>
        <Card title="Deployable" body="Production-ready deployment on Vercel"/>
        <Card title="Accessible" body="Semantic HTML and keyboard-friendly"/>
      </section>
    </main>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <article className="card">
      <h2>{title}</h2>
      <p>{body}</p>
    </article>
  );
}
