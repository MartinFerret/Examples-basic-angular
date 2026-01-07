# Exercice Angular — @Input / @Output

![GIF](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHc3OGVtZ3kyNzUxdTc2eGYxZ3d4ZXRlcjRodnJvbnJ4M3JkbnBqcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fUTLZ3MGO8JcOZ0Deh/giphy.gif)

## Noms des composants

- **Composant parent** : `DashboardComponent`
- **Composant enfant** : `UserCardComponent`

---

## Objectif
Mettre en pratique la communication **Parent → Enfant** et **Enfant → Parent** avec `@Input` et `@Output`.

Le **DashboardComponent** possède les données.  
Le **UserCardComponent** les affiche et déclenche une action.

---

## Contexte
On veut afficher une **fiche utilisateur**.

- Le **DashboardComponent** (parent) stocke les données de l’utilisateur.
- Le **UserCardComponent** (enfant) reçoit ces données et les affiche.
- Le **UserCardComponent** contient un bouton.
- Quand on clique sur ce bouton, le **UserCardComponent** envoie une information au **DashboardComponent**.

---

## Composant Parent — DashboardComponent

### Rôle
- Stocker les données de l’utilisateur (objet `user`)
- Envoyer ces données au composant enfant
- Réagir à une action déclenchée dans le composant enfant

### Données à gérer
- Un objet `user` contenant :
  - un prénom
  - un rôle
- Une variable `lastAction` qui stocke le dernier message reçu depuis l’enfant

### Comportement attendu
- Afficher un titre simple avec une balise `h1` (ex : *Dashboard*)
- Afficher le contenu de `lastAction`
- Afficher le composant **UserCardComponent**
- Transmettre l’objet `user` au **UserCardComponent**
- Mettre à jour `lastAction` lorsque le **UserCardComponent** envoie un message

---

## Composant Enfant — UserCardComponent

### Rôle
- Recevoir les données de l’utilisateur depuis le parent
- Afficher ces données
- Déclencher une action vers le parent

### Données reçues
- L’objet `user` envoyé par le **DashboardComponent**

### Navigateur
- Afficher le prénom de l’utilisateur
- Afficher son rôle
- Afficher un bouton **“Contacter”**

### Comportement attendu
- Au clic sur le bouton :
  - envoyer un message au **DashboardComponent**
  - le message doit contenir le prénom de l’utilisateur  
    (ex : *“Contact demandé pour Martin”*)

---

## Résultat attendu
- Les informations de l’utilisateur sont visibles dans le **UserCardComponent**
- Quand on clique sur le bouton :
  - le **DashboardComponent** reçoit un message
  - le **DashboardComponent** met à jour et affiche la dernière action (`lastAction`)

---

## Notions travaillées
- `@Input` : passer des données du parent vers l’enfant
- `@Output` : envoyer une information de l’enfant vers le parent
- Communication entre composants
- Séparation des responsabilités

⏱️ Durée estimée : **30 minutes**
