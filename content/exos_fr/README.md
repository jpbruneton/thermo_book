# Rédaction des exercices

La banque française est découpée en un fichier LaTeX par chapitre :
`exo_chp1.tex`, `exo_chp2.tex`, etc. Le numéro du chapitre est déduit du nom
du fichier ; il n'est donc pas nécessaire d'ajouter une commande `\lecon{N}`
dans chaque exercice.

Chaque exercice utilise la forme suivante :

```tex
\begin{exo}[Titre]{identifiant-stable}
\keywords{mot-clé 1, mot-clé 2}

Énoncé.

\begin{indication}
Indication optionnelle.
\end{indication}

\begin{solution}
Solution optionnelle.
\end{solution}
\end{exo}
```

Dans un chapitre, les exercices restent classés par difficulté croissante.
Une version traduite conserve le même nom de fichier et les mêmes identifiants
dans le dossier correspondant, par exemple `content/exos_en/exo_chp2.tex`.

Pour les nouveaux exercices, demander d'abord un calcul formel, puis regrouper
les valeurs dans une question finale d'application numérique. La solution doit
respecter le même ordre. Lorsque la situation physique s'y prête, la première
question demande un schéma simple et annoté du système ou de la transformation.
Ces règles n'imposent pas de reprendre rétroactivement les chapitres déjà
rédigés.

L'ancien fichier monolithique `content/tex/exercises_fr.tex`, conservé dans le
sous-module LaTeX pour son historique, n'est plus lu par le site ni par le
générateur PDF.
