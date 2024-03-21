import Link from "next/link";

export default function Home() {
  return (
    <div className="container px-4 pt-5">
        <h1>Bienvenue dans mon blog</h1>
        <span>je compte sur vous pour etre aimable</span>


        <div className="row mt-5">
          <div className="col-12 col-sm-6" style={{minHeight:"200px"}}>
            <div className="card w-100 h-100">
              <div className="card-body">
                <h5 className="card-title">Lisez les articles</h5>
                <h6 className="card-subtittle mb-2 text-muted">
                  venez vous cultiver
                </h6>
                <p className="card-text">Chaque auteur tente de vous apporter un plus</p>
                <Link href="/blog">Visitez le blog</Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6" style={{minHeight:"200px"}}>
            <div className="card w-100 h-100">
              <div className="card-body">
                <h5 className="card-title">Faites un tour vers la liste des membres</h5>
                <h6 className="card-subtittle mb-2 text-muted">
                rencontrez les dev
                </h6>
                <p className="card-text">Ajoutez et discutez avec les membres</p>
                <Link href="/utilisateurs">Decouvrez la liste des membres</Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
