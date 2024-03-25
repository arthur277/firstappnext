import Link from "next/link";

import React from 'react'

export default function Container  ({children}) {
  return (
    <>
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid justify-content-center">
                <Link href="/" className="navbar-brand mx-4">Accueil</Link>
                <Link href="/blog" className="navbar-brand mx-4">Blog</Link>
                <Link href="/utilisateurs" className="navbar-brand mx-4">Liste</Link>
            </div>
        </nav>
        {children}
    </>
  )
}
