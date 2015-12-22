// disable clicking;
(function (d) {
    d.body.addEventListener("click", function (e) {
        e.preventDefault();
    }, true);
}(document));

console.clear();

var str = 'View your result using the m-variable. eg m[0] etc.';
str += "DO YOU LIKE POETRY,,\
DO YOU LIKE POK MON,,\
DO YOU LIKE POKEMON,,\
DO YOU LIKE POLICEMEN,,\
DO YOU LIKE POLITICS,,\
DO YOU LIKE POP,,\
DO YOU LIKE POPCORN,,\
DO YOU LIKE POPSICLES,,\
DO YOU LIKE PORNOGRAPHY,,I am not particularly interested in it.,";

var re = /like/gi;
str2 = str.replace(re, '_like');
//console.log(str2);

str = "un deux un 3 un six STOP";
str = "replaces non-word chars (excluding '.') with whitespace trim L/R whitespace, replace known join words with ''";

str = "Est-ce que c'est chaud? Est-ce que c'est le bus pour New York? Est-ce que c'est loin d'ici? Est-ce que c'est Monsieur Smith? Est-ce que c'est possible? Est-ce que c'est près d'ici? Est-ce que c'est près? Est-ce que c'est prêt? En Avant! Point final.";

str = "Je suis allé au supermarché et ensuite au magasin d'informatique.  end " +
    "Je vais bien et toi?  end " +
    "Non je suis américain.  end " +
    "Si vous avez besoin de mon aide faites-le-moi savoir s'il vous plaît.  end " +
    "Faites le plein s'il vous plaît. (station d'essence)  end " +
    "Je voudrais acheter une bouteille d'eau s'il vous plaît.  end " +
    "Je voudrais aussi de l'eau s'il vous plaît.  end " +
    "Je vais très bien merci.  end " +
    "Non merci.  end " +
    "Non c'est la première fois.  end " +
    "J'ai trois enfants deux filles et un fils.  end " +
    "Je suis désolé nous sommes complets.  end " +
    "A combien de kilomètres est la Pennsylvanie?  end " +
    "A droite.  end " +
    "A gauche.  end " +
    "A l'aide!  end " +
    "A l'extérieur de l'hôtel.  end " +
    "A peu près trois cents kilomètres.  end " +
    "A quelle heure est-ce arrivé?  end " +
    "A quelle heure?  end " +
    "A sept heures du matin.  end " +
    "A sept heures du soir.  end " +
    "A trois heures de l'après-midi.  end " +
    "A trois heures.  end " +
    "Allez tout droit.  end " +
    "Allons voir.  end " +
    "Allons-y.  end " +
    "Amy est la petite amie de John.  end " +
    "Appelle la police.  end " +
    "Appelle-moi.  end " +
    "Apporte-moi ma chemise s'il te plaît.  end " +
    "As-tu besoin de quelque chose?  end " +
    "As-tu peur?  end " +
    "As-tu reçu mon e-mail?  end " +
    "Au deuxième étage.  end " +
    "Avez-vous besoin d'autre chose?  end " +
    "Bien sûr.  end " +
    "Bon après-midi.  end " +
    "Bonjour est-ce que Madame Smith est là s'il vous plaît?  end " +
    "Bonjour.  end " +
    "Bonne chance.  end " +
    "Bonne idée.  end " +
    "Bonsoir Monsieur.  end " +
    "C'est à combien de distance de Chicago?  end " +
    "C'est à combien de distance?  end " +
    "C'est à moi.  end " +
    "C'est au nord d'ici.  end " +
    "C'est bon.  end " +
    "C'est combien pour aller à Miami?  end " +
    "C'est combien pour le tout?  end " +
    "C'est combien?  end " +
    "C'est dans la septième rue.  end " +
    "C'est délicieux.  end " +
    "C'est dix-sept dollars.  end " +
    "C'est huit heures quarante-cinq.  end " +
    "C'est là-bas.  end " +
    "C'est là.  end " +
    "C'est là.  end " +
    "C'est le vingt-cinq août.  end " +
    "C'est loin d'ici.  end " +
    "C'est moins de cinq dollars.  end " +
    "C'est moins de trois kilomètres.  end " +
    "C'est neuf heures et quart.  end " +
    "C'est onze heures et demie du soir.  end " +
    "C'est plus de cinq dollars.  end " +
    "C'est plus long que deux kilomètres.  end " +
    "C'est près du supermarché.  end " +
    "C'est sept heures moins quart.  end " +
    "C'est six heures du matin.  end " +
    "C'est très important.  end " +
    "C'est trop loin.  end " +
    "C'est trop tard.  end " +
    "Ça coûte vingt dollars de l'heure.  end " +
    "Ça dépend du temps.  end " +
    "Ça dure combien de temps?  end " +
    "Ça fait mal ici.  end " +
    "Ça ne me fait rien.  end " +
    "Ça prend combien de temps en voiture?  end " +
    "Ça prend combien de temps pour aller en Georgie?  end " +
    "Ça prend combien de temps?  end " +
    "Ça prend deux heures en voiture.  end " +
    "Ça va?  end " +
    "Ça va.  end " +
    "Ce n'est pas grave.  end " +
    "Ce n'est pas très cher.  end " +
    "Certainement!  end " +
    "Chaque jour je me lève à six heures du matin.  end " +
    "Chaque semaine.  end " +
    "Chicago est très différente de Boston.  end " +
    "Cobien de langues est-ce que tu parles?  end " +
    "Combien coûte ceci?  end " +
    "Combien coûte cela?  end " +
    "Combien coûtent ces boucles d'oreilles?  end " +
    "Combien d'argent est-ce que vous avez?  end " +
    "Combien d'argent est-ce que vous gagnez?  end " +
    "Combien d'enfants est-ce tu as?  end " +
    "Combien d'heures par semaine est-ce que tu travailles?  end " +
    "Combien de personnes est-ce qu'il y a à New York?  end " +
    "Combien de personnes est-ce qu'il y a dans ta famille?  end " +
    "Combien de personnes? (restaurant)  end " +
    "Combien de temps est-ce que tu vas rester?  end " +
    "Combien est-ce que ça coûte par jour?  end " +
    "Combien est-ce que ça coûte?  end " +
    "Combien est-ce que ça coûtera?  end " +
    "Combien est-ce que je vous dois?  end " +
    "Combien mesures-tu?  end " +
    "Combien voudrais-tu?  end " +
    "Combien?  end " +
    "Comment ça va?  end " +
    "Comment est-ce que je m'y rends?  end " +
    "Comment est-ce que je me rends à l'Ambassade américaine?  end " +
    "Comment est-ce que je me rends à la rue Daniel?  end " +
    "Comment est-ce que je me sers de ça?  end " +
    "Comment est-ce que tu l'épèles?  end " +
    "Comment est-ce que tu le dis en anglais?  end " +
    "Comment est-ce que tu prononces ça?  end " +
    "Comment est-ce que tu sais?  end " +
    "Comment était le film?  end " +
    "Comment était le voyage?  end " +
    "Comment réglez-vous?  end " +
    "Comment va le travail?  end " +
    "Comment va-t-elle?  end " +
    "Comment vont les affaires?  end " +
    "Comment vont tes parents?  end " +
    "D'accord.  end " +
    "D'habitude je bois du café au petit déjeuner.  end " +
    "D'ici à là-bas.  end " +
    "Dans la cinquième rue.  end " +
    "Dans trente minutes.  end " +
    "De temps en temps.  end " +
    "Dépêche-toi!  end " +
    "Depuis combien de temps est tu es en Amérique?  end " +
    "Depuis combien de temps est-ce que tu es ici?  end " +
    "Depuis combien de temps est-ce que tu habites ici?  end " +
    "Depuis combien de temps est-ce que tu travailles ici?  end " +
    "Derrière la banque.  end " +
    "Dès que possible.  end " +
    "Donne-moi le stylo.  end " +
    "Donne-moi un coup de fil.  end " +
    "En face de la poste.  end " +
    "Enchanté.  end " +
    "Es-tu allergique à quelque chose?  end " +
    "Es-tu américain?  end " +
    "Es-tu arrivé?  end " +
    "Es-tu malade?  end " +
    "Es-tu marié?  end " +
    "Es-tu occupé?  end " +
    "Es-tu seul ici?  end " +
    "Es-tu sûr?  end " +
    "Es-tu venu avec ta famille?  end " +
    "Est- ce que tu as fini d'étudier?  end " +
    "Est-ce qu'il a neigé hier?  end " +
    "Est-ce qu'il aime l'école?  end " +
    "Est-ce qu'il doit pleuvoir demain?  end " +
    "Est-ce qu'il fait froid dehors?  end " +
    "Est-ce qu'il neige souvent en hiver dans le Massachusetts?  end " +
    "Est-ce qu'il pleut?  end " +
    "Est-ce qu'il y a des concerts?  end " +
    "Est-ce qu'il y a l'air conditionné dans la chambre?  end " +
    "Est-ce qu'il y a quelqu'un ici qui parle anglais?  end " +
    "Est-ce qu'il y a un cinéma près d'ici?  end " +
    "Est-ce qu'il y a un guide anglais?  end " +
    "Est-ce qu'il y a un magasin près d'ici?  end " +
    "Est-ce qu'il y a un restaurant dans l'hôtel?  end " +
    "Est-ce qu'il y a une boîte de nuit en ville?  end " +
    "Est-ce qu'ils l'ont déjà rencontrée?  end " +
    "Est-ce qu'ils viennent ce soir?  end " +
    "Est-ce que c'est chaud?  end " +
    "Est-ce que c'est le bus pour New York?  end " +
    "Est-ce que c'est loin d'ici?  end " +
    "Est-ce que c'est Monsieur Smith?  end " +
    "Est-ce que c'est possible?  end " +
    "Est-ce que c'est près d'ici?  end " +
    "Est-ce que c'est près?  end " +
    "Est-ce que c'est prêt?  end " +
    "Est-ce que c'est ton livre?  end " +
    "Est-ce que c'est un endroit sans danger?  end " +
    "Est-ce que ça peut être moins cher?  end " +
    "Est-ce que ça suffit?  end " +
    "Est-ce que ça va?  end " +
    "Est-ce que ce sont les mêmes?  end " +
    "Est-ce que ce stylo est à toi?  end " +
    "Est-ce que cette route va à New York?  end " +
    "Est-ce que j'ai du courrier?  end " +
    "Est-ce que je le prononce correctement?  end " +
    "Est-ce que je peux amener un ami?  end " +
    "Est-ce que je peux avoir accès à l'internet ici?  end " +
    "Est-ce que je peux avoir l'addition s'il vous plaît?  end " +
    "Est-ce que je peux avoir le menu s'il vous plaît.  end " +
    "Est-ce que je peux avoir un reçu s'il vous plaît?  end " +
    "Est-ce que je peux avoir un verre d'eau s'il vous plaît?  end " +
    "Est-ce que je peux emprunter de l'argent?  end " +
    "Est-ce que je peux l'essayer?  end " +
    "Est-ce que je peux me servir de ton téléphone?  end " +
    "Est-ce que je peux prendre rendez-vous pour mercredi prochain?  end " +
    "Est-ce que je peux prendre un message?  end " +
    "Est-ce que je peux voir votre passeport s'il vous plaît?  end " +
    "Est-ce que je peux vous aider?  end " +
    "Est-ce que John est ici?  end " +
    "Est-ce que John est là s'il vous plaît?  end " +
    "Est-ce que la banque est loin?  end " +
    "Est-ce que Monsieur Smith est un Américain?  end " +
    "Est-ce que nous pouvons avoir un peu plus de pain s'il vous plaît?  end " +
    "Est-ce que nous pouvons nous asseoir là-bas?  end " +
    "Est-ce que quelqu'un d'autre vient?  end " +
    "Est-ce que ta femme a aimé la Floride?  end " +
    "Est-ce que tes enfants sont avec toi?  end " +
    "Est-ce que ton fils est ici?  end " +
    "Est-ce que ton frère est allé en Californie?  end " +
    "Est-ce que ton mari est aussi de Boston?  end " +
    "Est-ce que ton père est à la maison?  end " +
    "Est-ce que tout va bien?  end " +
    "Est-ce que tu aimes ce livre?  end " +
    "Est-ce que tu aimes regarder la télé?  end " +
    "Est-ce que tu aimes tes collègues?  end " +
    "Est-ce que tu aimes ton patron?  end " +
    "Est-ce que tu as assez d'argent?  end " +
    "Est-ce que tu as de l'argent?  end " +
    "Est-ce que tu as déjà mangé de la soupe de pommes de terre?  end " +
    "Est-ce que tu as déjà mangé?  end " +
    "Est-ce que tu as faim?  end " +
    "Est-ce que tu as fait ça avant?  end " +
    "Est-ce que tu as mangé dans ce restaurant?  end " +
    "Est-ce que tu as pris tes médicaments?  end " +
    "Est-ce que tu as un crayon?  end " +
    "Est-ce que tu as un petit ami?  end " +
    "Est-ce que tu as un problème?  end " +
    "Est-ce que tu as un rendez-vous?  end " +
    "Est-ce que tu as une petite amie?  end " +
    "Est-ce que tu as vu ce film?  end " +
    "Est-ce que tu attends quelqu'un?  end " +
    "Est-ce que tu comprends?  end " +
    "Est-ce que tu en as un autre?  end " +
    "Est-ce que tu es allé à Boston?  end " +
    "Est-ce que tu es libre ce soir?  end " +
    "Est-ce que tu es prêt?  end " +
    "Est-ce que tu étudies l'anglais?  end " +
    "Est-ce que tu fais du sport?  end " +
    "Est-ce que tu fumes?  end " +
    "Est-ce que tu joues au basket?  end " +
    "Est-ce que tu la connais?  end " +
    "Est-ce que tu m'as envoyé des fleurs?  end " +
    "Est-ce que tu penses qu'il pleuvra aujourd'hui?  end " +
    "est-ce que tu penses qu'il va pleuvoir demain?  end " +
    "Est-ce que tu penses que c'est possible?  end " +
    "Est-ce que tu penses que tu seras de retour d'ici onze heures trente?  end " +
    "Est-ce que tu peux jeter ça pour moi?  end " +
    "Est-ce que tu peux me donner un exemple?  end " +
    "Est-ce que tu peux me faire une faveur?  end " +
    "Est-ce que tu peux me montrer?  end " +
    "Est-ce que tu peux me rappeler plus tard?  end " +
    "Est-ce que tu peux porter ça pour moi?  end " +
    "Est-ce que tu peux réparer ça?  end " +
    "Est-ce que tu peux répéter ça encore s'il te plaît?  end " +
    "Est-ce que tu peux tenir ça pour moi?  end " +
    "Est-ce que tu peux traduire ça pour moi?  end " +
    "Est-ce que tu sais ce que ça dit?  end " +
    "Est-ce que tu sais ce que ça veut dire?  end " +
    "Est-ce que tu sais combien ça coûte?  end " +
    "Est-ce que tu sais cuisiner?  end " +
    "Est-ce que tu sais nager?  end " +
    "Est-ce que tu sais où elle est?  end " +
    "Est-ce que tu sais où sont mes lunettes?  end " +
    "Est-ce que tu te plais ici?  end " +
    "Est-ce que tu te sens bien?  end " +
    "Est-ce que tu vas assister à leur mariage?  end " +
    "Est-ce que tu vas l'aider?  end " +
    "Est-ce que tu vas prendre un avion ou un train?  end " +
    "Est-ce que tu vas souvent en Floride?  end " +
    "Est-ce que tu veux aller au cinéma?  end " +
    "Est-ce que tu veux que je vienne te chercher?  end " +
    "Est-ce que tu veux venir avec moi?  end " +
    "Est-ce que tu veux venir avec moi?  end " +
    "Est-ce que tu viens ce soir?  end " +
    "Est-ce que votre maison est comme celle-ci?  end " +
    "Est-ce que vous acceptez les cartes de crédit?  end " +
    "Est-ce que vous acceptez les dollars?  end " +
    "Est-ce que vous avez ceci en taille 11?  end " +
    "Est-ce que vous avez des chambres de libre?  end " +
    "Est-ce que vous avez des enfants?  end " +
    "Est-ce que vous avez du café?  end " +
    "Est-ce que vous avez le numéro pour un taxi?  end " +
    "Est-ce que vous avez quelque chose de moins cher?  end " +
    "Est-ce que vous avez une piscine?  end " +
    "Est-ce que vous parlez anglais?  end " +
    "Est-ce que vous pouvez rappeler plus tard?  end " +
    "Est-ce que vous savez comment aller au Marriott Hotel?  end " +
    "Est-ce que vous savez où il y a un magasin qui vend des serviettes?  end " +
    "Est-ce que vous savez où je peux prendre un taxi?  end " +
    "Est-ce que vous vendez des médicaments? (magasin)  end " +
    "Est-ce que vous vendez des piles?  end " +
    "Est-ce qu'il y a quelque chose de moins cher?  end " +
    "Et toi?  end " +
    "Excellent.  end " +
    "Excusez-moi qu'est-ce que vous avez dit?  end " +
    "Excusez-moi.  end " +
    "Fais attention en conduisant.  end " +
    "Fais attention.  end " +
    "Faites un bon voyage.  end " +
    "Ici.  end " +
    "Il a besoin de nouveaux vêtements.  end " +
    "Il a cassé la fenêtre.  end " +
    "Il a dit que c'était un endroit sympa.  end " +
    "Il a dit que vous aimiez regarder des films.  end " +
    "Il a plu beaucoup aujourd'hui.  end " +
    "Il a raison.  end " +
    "Il a une belle voiture.  end " +
    "Il aime le jus de fruits mais il n'aime pas le lait.  end " +
    "Il arrive bientôt.  end " +
    "Il est américain.  end " +
    "Il est censé pleuvoir demain.  end " +
    "Il est dans la cuisine.  end " +
    "Il est ingénieur.  end " +
    "Il est onze heures et demie.  end " +
    "Il est plus rapide que moi.  end " +
    "Il est très bon étudiant.  end " +
    "Il est très célèbre.  end " +
    "Il est très ennuyeux.  end " +
    "Il est très travailleur.  end " +
    "Il étudie à l'université de Boston.  end " +
    "Il fait beaucoup de vent.  end " +
    "Il fait toujours ça pour moi.  end " +
    "Il fait très froid aujourd'hui.  end " +
    "Il fera froid ce soir.  end " +
    "Il l'aime beaucoup.  end " +
    "Il n'a pas l'air d'un infirmier.  end " +
    "Il n'est pas censé pleuvoir aujourd'hui.  end " +
    "Il n'est pas là maintenant.  end " +
    "Il n'y a personne pour l'instant.  end " +
    "Il ne me donne jamais rien.  end " +
    "Il nest jamais allé en Amérique.  end " +
    "Il pense que nous ne voulons pas y aller.  end " +
    "Il pleut beaucoup.  end " +
    "Il pleut.  end " +
    "Il sera de retour dans vingt minutes.  end " +
    "Il travaille pour une compagnie d'informatique à New York.  end " +
    "Il va faire chaud aujourd'hui.  end " +
    "Il va neiger aujourd'hui.  end " +
    "Il y a longtemps.  end " +
    "J'abandonne.  end " +
    "J'ai acheté une chemise hier.  end " +
    "J'ai beaucoup de choses à faire.  end " +
    "J'ai besoin d'aller chez moi.  end " +
    "J'ai besoin d'un docteur.  end " +
    "J'ai besoin d'une autre clé.  end " +
    "J'ai besoin d'y aller maintenant.  end " +
    "J'ai besoin de ça pour y arriver d'ici demain.  end " +
    "J'ai besoin de changer de vêtements.  end " +
    "J'ai besoin de mouchoirs.  end " +
    "J'ai besoin de pratiquer mon anglais.  end " +
    "J'ai de l'argent.  end " +
    "J'ai déjà mangé.  end " +
    "J'ai deux soeurs.  end " +
    "J'ai encore à me brosser les dents et à prendre une douche.  end " +
    "J'ai encore beaucoup de choses à acheter.  end " +
    "J'ai encore beaucoup de choses à faire.  end " +
    "J'ai entendu dire que le Texas était beau comme endroit.  end " +
    "J'ai eu un accident.  end " +
    "J'ai faim.  end " +
    "J'ai fait ce gâteau.  end " +
    "J'ai fait une erreur.  end " +
    "J'ai fait une réservation.  end " +
    "J'ai froid.  end " +
    "J'ai ma propre voiture.  end " +
    "J'ai mal à l'estomac.  end " +
    "J'ai mal à la gorge.  end " +
    "J'ai mal à la tête.  end " +
    "J'ai mal dans le bras.  end " +
    "J'ai perdu ma montre.  end " +
    "J'ai seulement cinq dollars.  end " +
    "J'ai soif.  end " +
    "J'ai trente-deux ans.  end " +
    "J'ai un rhume.  end " +
    "J'ai une question à te poser./Je veux te poser une question.  end " +
    "J'ai vingt-six ans.  end " +
    "J'aime la cuisine italienne.  end " +
    "J'aime regarder la télé.  end " +
    "J'allais à la bibliothèque.  end " +
    "J'allais quitter le restaurant quand mes amis sont arrivés.  end " +
    "J'arrive tout de suite.  end " +
    "J'arriverai sous peu.  end " +
    "J'espère que votre femme et vous ferez un bon voyage.  end " +
    "J'étais dans la bibliothèque.  end " +
    "J'habite en Californie.  end " +
    "J'oublie.  end " +
    "J'y ai travaillé pendant cinq ans.  end " +
    "J'y suis allé.  end " +
    "Je cherche la poste.  end " +
    "Je comprends maintenant.  end " +
    "Je comprends.  end " +
    "Je dois aller à la poste.  end " +
    "Je dois laver mes vêtements.  end " +
    "Je fais un mètre quatre-vingt.  end " +
    "Je fais une taille huit.  end " +
    "Je l'ai déjà vu.  end " +
    "Je l'ai vu.  end " +
    "Je l'aime.  end " +
    "Je l'aime.  end " +
    "Je lui dirai que tu as appelé.  end " +
    "Je m'appelle John Smith.  end " +
    "Je m'apprête à sortir.  end " +
    "Je m'en fiche.  end " +
    "Je m'ennuie.  end " +
    "Je me sens bien.  end " +
    "Je me souviens.  end " +
    "Je n'ai jamais fait ça.  end " +
    "Je n'ai jamais vu ça avant.  end " +
    "Je n'ai pas assez d'argent.  end " +
    "Je n'ai pas d'argent.  end " +
    "Je n'ai pas de petite amie.  end " +
    "Je n'ai pas encore décidé.  end " +
    "Je n'ai pas encore déjeuné.  end " +
    "Je n'ai pas fini de manger.  end " +
    "Je n'ai pas le temps maintenant.  end " +
    "Je n'ai pas peur.  end " +
    "Je n'en veux pas.  end " +
    "Je n'y suis pas allé.  end " +
    "Je n'y vais pas.  end " +
    "Je ne comprends pas ce que vous dites.  end " +
    "Je ne comprends pas.  end " +
    "Je ne l'aime pas.  end " +
    "Je ne l'aime pas.  end " +
    "Je ne me sens pas bien.  end " +
    "Je ne parle pas très bien l'anglais.  end " +
    "Je ne parle pas très bien.  end " +
    "Je ne pense pas.  end " +
    "Je ne sais pas m'en servir.  end " +
    "Je ne sais pas.  end " +
    "Je ne suis pas américain.  end " +
    "Je ne suis pas encore prêt.  end " +
    "Je ne suis pas marié.  end " +
    "Je ne suis pas occupé.  end " +
    "Je ne suis pas sûr.  end " +
    "Je ne veux pas ça.  end " +
    "Je ne veux pas te déranger.  end " +
    "Je ne vous entends pas clairement.  end " +
    "Je ne vous entends pas.  end " +
    "Je nettoie ma chambre.  end " +
    "Je paierai le dîner.  end " +
    "Je paierai les billets.  end " +
    "Je paierai.  end " +
    "Je parle deux langues.  end " +
    "Je parle un peu anglais.  end " +
    "Je pars demain.  end " +
    "Je pensais qu'il avait dit autre chose.  end " +
    "Je pensais que les vêtements étaient plus chers.  end " +
    "Je pense aussi.  end " +
    "Je pense que c'est bon.  end " +
    "Je pense que c'est très bon.  end " +
    "Je pense que ces chaussures sont très belles.  end " +
    "Je pense que j'ai besoin de voir un docteur.  end " +
    "Je pense que tu as trop de vêtements.  end " +
    "Je peux nager.  end " +
    "Je plaisante.  end " +
    "Je prendrai celui-ci aussi.  end " +
    "je prendrai la même chose.  end " +
    "Je prendrai un verre d'eau s'il vous plaît.  end " +
    "Je prendrai une tasse de thé s'il vous plaît.  end " +
    "Je rappellerai plus tard.  end " +
    "Je regarde. (Faire des achats)  end " +
    "Je rentre à la maison dans quatre jours.  end " +
    "Je reviendrai plus tard.  end " +
    "Je reviens tout de suite.  end " +
    "Je sais.  end " +
    "Je sors du travail à six heures.  end " +
    "Je suis à mon compte.  end " +
    "Je suis allergique aux fruits de mer.  end " +
    "Je suis américain.  end " +
    "Je suis célibataire.  end " +
    "Je suis content.  end " +
    "Je suis d'accord.  end " +
    "Je suis débutant.  end " +
    "Je suis désolé.  end " +
    "Je suis en attente. (téléphone)  end " +
    "Je suis fatigué.  end " +
    "Je suis ici depuis deux jours.  end " +
    "Je suis ici pour affaires.  end " +
    "Je suis inquiet aussi.  end " +
    "Je suis malade.  end " +
    "Je suis marié.  end " +
    "Je suis perdu.  end " +
    "Je suis prêt.  end " +
    "je suis professeur.  end " +
    "Je suis repu.  end " +
    "Je suis très occupé.  end " +
    "Je suis très occupé. Je n'ai pas le temps maintenant.  end " +
    "Je suis un Américain.  end " +
    "Je suis venu avec ma famille.  end " +
    "Je t'aime.  end " +
    "Je t'appellerai vendredi.  end " +
    "Je t'appellerai vendredi.  end " +
    "Je t'apprendrai.  end " +
    "Je t'attends.  end " +
    "Je t'emmenerai à l'arrêt de bus.  end " +
    "Je te crois.  end " +
    "Je te donnerai un coup de fil.  end " +
    "Je te fais confiance.  end " +
    "Je te parlerai bientôt.  end " +
    "Je vais au lit.  end " +
    "Je vais bien.  end " +
    "Je vais dîner.  end " +
    "Je vais en Amérique l'année prochaine.  end " +
    "Je vais le prendre.  end " +
    "Je vais partir.  end " +
    "Je veux acheter quelque chose.  end " +
    "Je veux contacter notre ambassade.  end " +
    "Je veux envoyer ce paquet aux Etats-Unis.  end " +
    "Je veux seulement un en-cas.  end " +
    "Je veux te donner un cadeau.  end " +
    "Je veux te montrer quelque chose.  end " +
    "Je viens d'Amérique.  end " +
    "Je viens te chercher.  end " +
    "Je voudrais acheter quelque chose.  end " +
    "Je voudrais acheter une carte de téléphone s'il vous plaît.  end " +
    "Je voudrais aller au magasin.  end " +
    "Je voudrais aller chez moi.  end " +
    "Je voudrais appeler les Etats-Unis.  end " +
    "Je voudrais échanger ceci contre des dollars.  end " +
    "Je voudrais en avoir un.  end " +
    "Je voudrais envoyer ça en Amérique.  end " +
    "Je voudrais envoyer un fax.  end " +
    "Je voudrais faire du shopping.  end " +
    "Je voudrais faire une promenade.  end " +
    "Je voudrais faire une réservation.  end " +
    "Je voudrais le numéro de l'hôtel Hilton s'il vous plaît.  end " +
    "je voudrais louer une voiture.  end " +
    "Je voudrais manger au restaurant dans la cinquième rue.  end " +
    "Je voudrais parler à Monsieur Smith s'il vous plaît.  end " +
    "Je voudrais passer un coup de téléphone.  end " +
    "Je voudrais un plan de la ville.  end " +
    "Je voudrais une chambre à deux lits s'il vous plaît.  end " +
    "Je voudrais une chambre à un lit.  end " +
    "Je voudrais une chambre non-fumeur.  end " +
    "Je voudrais une chambre.  end " +
    "Je voudrais une table près de la fenêtre.  end " +
    "Je voudrais utiliser l'internet.  end " +
    "Joyeux anniversaire.  end " +
    "La date d'expiration.  end " +
    "La prochaine fois.  end " +
    "Là-bas.  end " +
    "Laisse-moi vérifier.  end " +
    "laisse-moi y réfléchir.  end " +
    "Le vingt-deux octobre.  end " +
    "Le vol dure combien de temps?  end " +
    "Les affaires vont bien.  end " +
    "Ma fille est ici.  end " +
    "ma grand-mère est décédée l'année dernière.  end " +
    "ma maison est près de la banque.  end " +
    "Ma valise a disparu.  end " +
    "Ma voiture a été heurtée par une autre voiture.  end " +
    "Ma voiture ne marche pas.  end " +
    "Maintenat ou plus tard?  end " +
    "Mâle ou femelle?  end " +
    "Mon ami est américain.  end " +
    "Mon anniversaire est le vingt-sept août.  end " +
    "Mon fils étudie l'informatique.  end " +
    "Mon fils.  end " +
    "Mon père est avocat.  end " +
    "Mon père y est allé.  end " +
    "Mon portable n'a pas une bonne réception.  end " +
    "Mon portable ne marche pas.  end " +
    "N'est-ce pas?  end " +
    "N'importe quoi.  end " +
    "Ne fais pas ça.  end " +
    "Ne t'inquiète pas.  end " +
    "Non.  end " +
    "Nos enfants sont en Amérique.  end " +
    "On a volé ma montre.  end " +
    "Ouvre la fenêtre.  end " +
    "Ouvre la porte.  end " +
    "Partageons.  end " +
    "Pas de problème.  end " +
    "Pas encore.  end " +
    "Pas récemment.  end " +
    "Pendant combien de temps est-ce que tu vas rester en Californie?  end " +
    "Pendant combien de temps est-ce que tu vas rester?  end " +
    "Personne ne nous aide.  end " +
    "Peu importe.  end " +
    "Peut-être.  end " +
    "Peux-tu recommander un bon restaurant?  end " +
    "Plus de deux cents kilomètres.  end " +
    "Plus que ça.  end " +
    "Pour combien de nuits?  end " +
    "Pourrais-je parler à madame Smith s'il vous plaît?  end " +
    "Pouvez-vous m'aider?  end " +
    "Pouvez-vous parler plus fort s'il vous plaît?  end " +
    "Pouvez-vous répéter s'il vous plaît?  end " +
    "Pratiquons l'anglais.  end " +
    "Près de la banque.  end " +
    "Quel âge as-tu?  end " +
    "Quel goût est-ce que ça a?  end " +
    "Quel temps fait-il?  end " +
    "Quelques-uns.  end " +
    "Quoi d'autre?  end " +
    "Ramasse tes vêtements.  end " +
    "Retrouvons-nous devant l'hôtel.  end " +
    "Rien d'autre.  end " +
    "S'il te plaît appelle-moi.  end " +
    "S'il te plaît attends-moi.  end " +
    "S'il te plaît compte ça pour moi.  end " +
    "S'il te plaît dis-lui que John a appelé.  end " +
    "S'il te plaît dis-moi.  end " +
    "S'il te plaît écris-le.  end " +
    "S'il te plaît rentre.  end " +
    "S'il te plaît.  end " +
    "S'il vou plaît emmenez-moi à l'aéroport.  end " +
    "S'il vous plaît asseyez-vous.  end " +
    "S'il vous plaît emmenez-moi à cette adresse.  end " +
    "S'il vous plaît enlevez vos chaussures.  end " +
    "S'il vous plaît parlez anglais.  end " +
    "S'il vous plaît parlez plus lentement.  end " +
    "S'il vous plaît parlez plus lentement.  end " +
    "S'il vous plaît remplissez ce formulaire.  end " +
    "Sa chambre est très petite.  end " +
    "Sa famille arrive demain.  end " +
    "Salut.  end " +
    "Samedi ça va?  end " +
    "Santé!  end " +
    "Si vous l'aimez je peux en acheter plus.  end " +
    "Son fils.  end " +
    "Suivez-moi.  end " +
    "Super.  end " +
    "Tais-toi.  end " +
    "Tout est prêt.  end " +
    "Tout le monde le sais.  end " +
    "Toute la journée.  end " +
    "Travailles-tu aujourd'hui?  end " +
    "Travailles-tu demain?  end " +
    "Tu crois ça?  end " +
    "Tu entends ça?  end " +
    "Tu te sens mieux?  end " +
    "Un aller simple ou un aller-retour?  end " +
    "Un aller simple.  end " +
    "Un aller-retour.  end " +
    "Un billet pour New York s'il vous plaît.  end " +
    "Un comme ça.  end " +
    "Un peu.  end " +
    "Viens ici.  end " +
    "Voilà mon numéro.  end " +
    "Voilà votre commande.  end " +
    "Voilà votre salade.  end " +
    "Voilà.  end " +
    "Vous attendez depuis longtemps?  end " +
    "Vous voilà.  end " +
    "Cette tâche me prit plus de temps que je n'avais prévu.  end " +
    "Fred est un mec feignant.  end " +
    "Quels sont tes points forts ?  end " +
    "N'y va pas après la nuit tombée.  end " +
    "Sautez.  end " +
    "C'est l'idée.  end " +
    "Ces stylos sont à lui.  end " +
    "D'abord, les stagiaires sont maladroits dans cette société.  end " +
    "L'incendie se déclara après que les employés fussent rentrés chez eux.  end " +
    "Ta conduite est parfaitement légale.  end " +
    "Tom n'a pas besoin d'aller à l'école aujourd'hui.  end " +
    "Allons-y et voyons autant de choses que nous pourrons.  end " +
    "C'est le passage vers la mer.  end " +
    "N'importe quel moment me conviendra.  end " +
    "Il y avait deux morceaux de gâteau.  end " +
    "Écris avec un stylo, non avec un crayon.  end " +
    "Ce style de chapeau est à la mode en ce moment.  end " +
    "Elle lui enjoignit d'étudier.  end " +
    "Serais-tu assez gentil pour me l'expliquer ?  end " +
    "Une pomme se trouve sur le bureau.  end " +
    "J'aime bien recycler le mur. Je fais de la traduction durable.  end " +
    "Tom sembla anxieux des résultats du test d'anglais.  end " +
    "T'es-tu battu avec Ken ?  end " +
    "Vivre en ville est assez différent de vivre à la campagne.  end " +
    "Ce diseur de bonne aventure n'est rien de mieux qu'un menteur.  end " +
    "Pourriez-vous m'expliquer le sens de cette peine ?  end " +
    "La somme de ces chiffres ne colle pas.  end " +
    "Tu vas mieux maintenant ?  end " +
    "La ville était pleine d'activité.  end " +
    "Je comprends tes sentiments.  end " +
    "Laisse-moi essayer.  end " +
    "Enfile tes chaussures.  end " +
    "Si tu n'y vas pas, je n'irais pas non plus.  end " +
    "Nous avons peu de temps à perdre.  end " +
    "T'entends-tu bien avec ton patron ?  end " +
    "J'admets que ce n'est peut-être pas le meilleur moyen de le faire.  end " +
    "Je connais le garçon qui est assis le plus près de la porte.  end " +
    "Tout le voisinage fut surpris par cette nouvelle.  end " +
    "Clarifions un peu ce problème.  end " +
    "Ton école se situe-t-elle dans cette ville ?  end " +
    "Le soleil d'été tapait sur nous.  end " +
    "Je ne le ferais pas si j'étais vous.  end " +
    "Le train est à destination de Londres.  end " +
    "Il n'y avait pas plus de deux livres sur le bureau.  end " +
    "Elle est timide et parle peu.  end " +
    "Je n'arrive pas à arrêter de penser à l'argent volé.  end " +
    "Ce weekend, si possible.  end " +
    "Je le connais de nom, mais pas de visage.  end " +
    "L'Angleterre est fière de ses poètes.  end " +
    "J'espère que je vivrai près de chez toi.  end " +
    "Il y avait du tonnerre et des éclairs la nuit passée.  end " +
    "Le ciel semble en colère.  end " +
    "Il y avait 10 officiers de police sur le site.  end " +
    "Nous devons toujours nous préparer face aux désastres.  end " +
    "Si j'étais vous, je ne ferais pas ça.  end " +
    "Cela ne mena à rien.  end " +
    "La vie n'est qu'une forme d'organisation sophistiquée de la matière.  end " +
    "Enseigner l'anglais est sa profession.  end " +
    "Puis-je utiliser votre dictionnaire ?  end " +
    "Deux verres de jus d'orange s'il vous plaît.  end " +
    "Je veux parler à M. Sato s'il vous plaît.  end " +
    "J'ai un frère aîné.  end " +
    "Cette théorie est généralement acceptée.  end " +
    "La rivière coule doucement vers la mer.  end " +
    "À la lumière de ce que tu nous as dit, je pense que nous devrions revoir notre plan.  end " +
    "Un matin pluvieux, il partit tôt de chez lui afin d'arriver à l'heure à l'école.  end " +
    "Le thermomètre descend souvent en dessous de zéro.  end " +
    "Tom sent que son équipe gagnera le match.  end " +
    "Le prix de l'or varie d'un jour à l'autre.  end " +
    "Le pays en entier était couvert de neige.  end " +
    "Peux-tu répéter cela ?  end " +
    "Peux-tu me dire où je me situe sur cette carte ?  end " +
    "Beaucoup d'hirondelles viendront bientôt du sud.  end " +
    "Je me présenterai à la réunion.  end " +
    "Donna est née avec une cuillère en argent dans la bouche.  end " +
    "J'aime lire des livres.  end " +
    "Cette ville vous plait-elle ?  end " +
    "Le docteur n'est pas disponible maintenant.  end " +
    "Me feras-tu une faveur ?  end " +
    "Je voudrais acheter quelques bottes.  end " +
    "Le prix du chou chuta à cause de la surproduction.  end " +
    "C'est de loin la meilleure nouvelle qui a été publiée cette année.  end " +
    "Tu as peut-être raison, mais je suis contre ton opinion.  end " +
    "Quelles sont les dimensions de cette pièce ?  end " +
    "Nous l'avons rencontrée par hasard.  end " +
    "Je vais discuter avec Marty et voir ce qu'il en pense.  end " +
    "Je préfère marcher plutôt que de prendre le bus.  end " +
    "Il me raconta une histoire intéressante.  end " +
    "Il y a quelques pommes sur cet arbre, n'est-ce pas ?  end " +
    "Elle était différente de la plupart des femmes du voisinage en ce qu'elle savait lire et écrire.  end " +
    "Ça ne me plaît pas.  end " +
    "Elle n'aime pas ma manière de parler.  end " +
    "Ce n'est pas parce qu'un livre n'intéresse pas les lecteurs que la faute se situe forcément dans le livre.  end " +
    "Pouvez-vous me dire ce que c'est ?  end " +
    "Comment sont-ils devenus si riches ?  end " +
    "Pour faire un gâteau, vous devez utiliser des œufs, du beurre et du sucre.  end " +
    "Étant très fatigué, j'allai me coucher tôt.  end " +
    "Nous n'avons pas eu d'autres choix que d'appeler la police la nuit dernière.  end " +
    "Le garçon que j'aime ne m'aime pas.  end " +
    "Tom sait parler allemand aussi bien qu'anglais.  end " +
    "Un brillant avenir s'offre devant lui.  end " +
    "Resteras-tu à la maison ce soir ?  end " +
    "Ce couteau a une lame très effilée.  end " +
    "Vous ne pouvez pas le manquer.  end " +
    "Cela fait plus de trois ans depuis que j'ai emménagé ici.  end " +
    "La prétresse vaudou ricana quand Tom et Mary, perdus dans cette phrase, se demandèrent qui donc, sinon l'auteur, maîtrisait en fait leur destin.  end " +
    "Puis-je faire une réservation pour un golf ?  end " +
    "Vous pouvez inviter qui vous voulez.  end " +
    "Tu ferais mieux d'abandonner une idée aussi radicale.  end " +
    "Le professeur Smith est connu pour son style de vie excentrique.  end " +
    "Le professeur a une grande influence sur ses élèves.  end " +
    "Maîtriser une langue étrangère demande de la patience.  end " +
    "Je lui ai rendu son livre.  end " +
    "Le docteur lui dit qu'elle devrait se reposer.  end " +
    "Peux-tu prendre ça s'il te plaît ?  end " +
    "Tu bois trop de café.  end " +
    "C'est la lettre écrite par M. Brown.  end " +
    "Je vous prie de revenir.  end " +
    "Il m'a demandé de lui passer le sel.  end " +
    "Nous n'arrivons pas à dormir bien les nuits d'été.  end " +
    "Ces stylos sont à lui.  end " +
    "Arrêtez de parler, voulez-vous ?  end " +
    "Elle donnera sa photo à qui la veut.  end " +
    "Voudrais-tu que je te masse le torse ?  end " +
    "La compagnie cessa son activité après plusieurs années de baisse de profits.  end " +
    "Les conduites dangereuses devraient être punies.  end " +
    "La récession est une baisse temporaire des activités commerciales à une période où une telle activité généralement augmente.  end " +
    "Luciano a peut-être la foule derrière lui, mais il a encore du lait qui lui coule derrière les oreilles.  end " +
    "Elle le traite souvent de tous les noms.  end " +
    "J'ai fait le plein de ma voiture à la station service du coin.  end " +
    "Cela coûtera trente mille yens selon la plus faible estimation.  end " +
    "Il a dit qu'il était fatigué et que donc il irait tôt chez lui.  end " +
    "On demande usuellement aux visiteurs de retirer leurs chaussures avant de rentrer dans une maison japonaise.  end " +
    "Notre voiture est équipée de l'air conditionné.  end " +
    "En tant qu'Anglais, il est particulièrement sensible aux différences entre les usages anglais et étasunien.  end " +
    "Tu ferais mieux de faire comme le médecin t'a conseillé.  end " +
    "J'ai besoin de quelques cintres.  end " +
    "Il y a une bibliothèque dans chaque ville étatsunienne.  end " +
    "Où puis-je avoir une carte téléphonique ?  end " +
    "Puis-je utiliser votre crayon ?  end " +
    "J'ai mal à l'estomac.  end " +
    "Ma femme est une bonne administratrice.  end " +
    "M. Johnson, le président du club, viendra bientôt.  end " +
    "Que ferais-tu, si tu avais un million de dollars ?  end " +
    "La chance nous a souri alors.  end " +
    "N'oublie pas le fait que fumer est mauvais pour ta santé.  end " +
    "Si je l'avais su, je ne lui aurais jamais dit de telles choses.  end " +
    "Il l'embrassa, les yeux fermés.  end " +
    "Les oiseaux volaient en groupe.  end " +
    "Développer son habileté à parler anglais est, il semble, la raison pour laquelle il est parti étudier à l'étranger.  end " +
    "L'incident sema les germes de la guerre.  end " +
    "À ce propos, l'as-tu vu dernièrement ?  end " +
    "Ils vécurent une vie heureuse.  end " +
    "Ils eurent un air soulagé seulement quand il fut en mouvement.  end " +
    "Sais-tu patiner ?  end " +
    "Au lieu d'aller en Europe, j'ai décidé d'aller aux États-Unis.  end " +
    "Tu as la liberté de voyager où bon te semble.  end " +
    "J'ai passé des journées à ne rien faire durant mes congés.  end " +
    "Le dialogue diplomatique aida à mettre fin au conflit.  end " +
    "Regarde ce problème plus attentivement.  end " +
    "Ce problème est trop difficile pour être résolu par des enfants de l'école primaire.  end " +
    "Comment puis-je quitter ce travail ?  end " +
    "Chat échaudé craint l'eau froide.  end " +
    "Le climat de Londres diffère de celui de Tokyo.  end " +
    "J'étais très fatigué, donc je me suis couché tôt.  end " +
    "Je veux étudier le français.  end " +
    "Ce poisson ne contient pas de poison.  end " +
    "« Comment oses-tu m'exiler à la fin de cette phrase ? », demanda Tom.  end " +
    "Il est temps que tu abandonnes tes manières puériles.  end " +
    "Le train voyage à la vitesse de 50 miles par heure.  end " +
    "Quel chapeau est le tien ?  end " +
    "Je me demande ce que veut dire cette phrase.  end " +
    "Recherches le mot dans le dictionnaire.  end " +
    "Il y a une masse de nuages noirs dans le ciel.  end " +
    "Il est difficile de répondre à ta question.  end " +
    "La Terre a une forme similaire à celle d'une orange.  end " +
    "Cette robe me va à ravir.  end " +
    "Elle a promis de l'épouser.  end " +
    "Il s'occupera des chats pour moi quand je serai à l'étranger.  end " +
    "Il est vrai qu'il eut tout bon à l'examen.  end " +
    "Le film était si triste que tout le monde a pleuré.  end " +
    "Il aime beaucoup le baseball.  end " +
    "Il essaya en vain d'ouvrir cette porte verrouillée.  end " +
    "Tom et Mary s'apprêtaient à plonger, du bord gauche de la phrase, dans l'infini corpus, lorsqu'ils virent au-dessous un banc de contributeurs affamés, les dents dehors, prêts à leur sauter dessus et à déchiqueter leurs fautes jusqu'à la dernière.  end " +
    "Ils roulent à gauche en Angleterre.  end " +
    "Je n'écris toujours pas bien le chinois.  end " +
    "Merci pour ton cadeau.  end " +
    "C'est le pire film que j'ai jamais vu.  end " +
    "Vu d'avion, cette île a l'air très belle.  end " +
    "Une lune de miel au Canada coûte beaucoup d'argent.  end " +
    "Je lui rendis visite en vu de lui donner un petit conseil.  end " +
    "Où se situe la douleur ?  end " +
    "À présent, la montagne est cachée par les nuages.  end " +
    "Il est dit qu'un trésor est enterré dans cet endroit.  end " +
    "Nous allons généralement à l'école à pied.  end " +
    "Dans dix ans notre ville aura beaucoup changé.  end " +
    "La Terre a une forme similaire à celle d'une orange.  end " +
    "J'espère que tout ira bien à la fin.  end " +
    "S'il avait suivi les conseils de son médecin, il ne serait peut-être pas mort.  end " +
    "La maison d'un Anglais est son château.  end " +
    "Tu peux acheter celui que tu aimes, mais pas les deux.  end " +
    "La longueur de ce navire est de 30 mètres.  end " +
    "Je suis désolé de t'amener tous ces ennuis.  end " +
    "J'ai toujours voulu te voir.  end " +
    "Il continua à faire commerce pendant plusieurs années.  end " +
    "Gardez ces places pour les personnes âgées.  end " +
    "Y a-t-il une quelconque aide de disponible ?  end " +
    "Voudrais-tu jouer au foot avec nous ?  end " +
    "Les collines étaient recouvertes de neige.  end " +
    "Je suis très bon à paraître organisé, bien que la réalité soit quelque peu différente.  end " +
    "Rendez vos armes.  end " +
    "L'image de l'accident me rendit malade.  end " +
    "Ce manuel scolaire est trop dur pour moi.  end " +
    "Cette nouvelle nous surprit beaucoup.  end " +
    "Mis à part les carottes, il n'y a rien qu'il ne mange pas.  end " +
    "L'homme par là-bas qui lit le journal est mon oncle.  end " +
    "En plus de parler anglais, il sait parler français.  end " +
    "Avez-vous déjà visité Rome ?  end " +
    "Si tu en as fini avec ce livre, j'aimerais l'avoir.  end " +
    "Elle est sur le point de partir.  end " +
    "Le café était tellement chaud que je n'ai pas pu le boire.  end " +
    "Ton comportement laisse beaucoup à désirer.  end " +
    "Tom et Mary recherchaient la phrase inconnue et se demandaient qui en était l'auteur.  end " +
    "Ma sœur n'étudie pas pour l'instant.  end " +
    "De nos jours personne ne peut imaginer une vie sans télévision.  end " +
    "Ce travail ne paie pas.  end " +
    "Il nia avoir pris part au crime.  end " +
    "Je me demande lequel des coureurs finira premier.  end " +
    "Avez-vous une bière étrangère ?  end " +
    "La coupe des Beatles fit sensation.  end " +
    "Elle n'a que deux ans, mais elle sait déjà compter jusqu'à 100.  end " +
    "Je m'arrangerai pour que quelqu'un vienne te chercher chez toi.  end " +
    "Prends celui que tu préfères.  end " +
    "C'est mal de mentir.  end " +
    "L'audience fut profondément affectée.  end " +
    "Elle l'a prétendument tué.  end " +
    "Grâce au développement de l'agronomie, la production mondiale en nourriture a pu réussir à suivre la croissance de la population, mais seulement au détriment du futur.  end " +
    "Je doute qu'il vienne.  end " +
    "Est-ce que ça va, si je m'assois ici ?  end " +
    "Je suis très honoré de vous rencontrer.  end " +
    "Selon toutes les apparences, elle est en bonne santé.  end " +
    "Tu dois répondre à ces questions.  end " +
    "Je me dépêchai pour avoir le premier train.  end " +
    "Tu dois davantage étudier.  end " +
    "C'est une brillante idée.  end " +
    "Quand il partit à la retraite, son fils reprit son affaire.  end " +
    "Je compte devenir ingénieur.  end " +
    "Cette montagne est difficile à escalader.  end " +
    "M. Tanabe est sorti pour le moment.  end " +
    "Il était horriblement pauvre quand il était jeune.  end " +
    "Asseyons-nous ici sur l'herbe.  end " +
    "Jane mit une semaine avant que sa crève ne passe.  end " +
    "Le vert te va bien.  end " +
    "Je suis sûr que ce livre sera d'une grande utilité pour toi.  end " +
    "Le meurtre est passible de la peine capitale.  end " +
    "Il n'y a pas cours en août.  end " +
    "Il rit constamment.  end " +
    "Elle dit qu'elle était heureuse.  end " +
    "Je ne lis pas trop les journaux.  end " +
    "Tu m'as abasourdi !  end " +
    "J'ai juste fini de déjeuner.  end " +
    "Ne ferions-nous pas mieux de partir tôt ?  end " +
    "Si elles avaient suivi les conseils de leurs médecins, elles ne seraient peut-être pas mortes.  end " +
    "N'importe comment, c'est embêtant, n'est-ce pas ?  end " +
    "Elle est non seulement belle mais aussi intelligente.  end " +
    "Si j'étais toi, j'aurais fait la même chose dans une situation aussi difficile.  end " +
    "D'où cela part-il ?  end " +
    "En faisant un peu plus d'effort, il aurait réussi.  end " +
    "On te réclame au téléphone.  end " +
    "Les États-Unis d'Amérique s'imaginent être la nation la plus libre du monde.  end " +
    "Je reviens de suite.  end " +
    "Il a posé tendrement sa main sur son épaule.  end " +
    "C'est dangereux de sauter pour monter abord d'un train en marche.  end " +
    "Mets-toi de côté, je te prie.  end " +
    "Il nous trahit en disant à l'ennemi où nous nous trouvions.  end " +
    "Ça ne peut être qu'un gentleman pour agir ainsi.  end " +
    "Nous y voici !  end " +
    "Garde un œil sur cette mallette.  end " +
    "Tu sais t'y prendre avec les femmes.  end " +
    "Si j'avais été libre, j'aurais pu t'aider.  end " +
    "Il a deux chats.  end " +
    "De nombreux livres furent volés.  end " +
    "L'alarme-incendie sonna.  end " +
    "Présentez mes respects à vos parents.  end " +
    "Nous vivons à la campagne durant l'été.  end " +
    "Aimes-tu la musique ?  end " +
    "De nos jours les gens ne savent plus vivre sans air-conditionné.  end " +
    "Ken se plaignit d'avoir mal à la tête.  end " +
    "Ne sachant pas quoi faire, il m'a appelé à l'aide.  end " +
    "Le petit bateau était à la merci du vent.  end " +
    "Je ne peux me permettre de gaspiller le moindre yen.  end " +
    "Le smog est l'ennemi des poumons en bonne santé.  end " +
    "Les plastiques ont pris la place de nombreux matériaux conventionnels.  end " +
    "Des milliers de personnes voulaient connaître la réponse.  end " +
    "Comment se fait-il que tu saches parler cette langue ?  end " +
    "Les profits des agences de voyages explosèrent.  end " +
    "Comment se fait-il que tu ne le saches pas ?  end " +
    "Sais-tu comment manipuler un ordinateur ?  end " +
    "Ne tire pas avantage des faiblesses des autres.  end " +
    "Quel idiot j'étais de lui prêter de l'argent.  end " +
    "Puis-je utiliser votre téléphone ?  end " +
    "Dois-je annuler l'appel ?  end " +
    "Les bénéfices devraient évidemment dépasser les coûts.  end " +
    "Personne ne savait à quoi ressemblait la machine.  end " +
    "La nouvelle robe lui plut.  end " +
    "Je ne fais jamais un discours sans être nerveux.  end " +
    "L'un est à Kumamoto et l'autre à Tokyo.  end " +
    "Tu peux chanter une chanson.  end " +
    "Le docteur me rassura quant à l'état de mon père.  end " +
    "Je vous conseille de ne jamais vivre au-dessus de votre revenu.  end " +
    "Le savon me piqua les yeux.  end " +
    "L'Homme ne pourrait vivre sans air.  end " +
    "Tom et Mary ne comprenaient pas le sens profond de la phrase dans laquelle ils se trouvaient pourtant et se dirent que ce devait être vraiment dur de comprendre le sens de phrases où ils ne se trouvaient pas.  end " +
    "Vous êtes libre de faire ce que bon vous semble avec votre argent.  end " +
    "J'ai fait ces boîtes par moi-même.  end " +
    "Voulez-vous un peu plus de thé ?  end " +
    "Les bonnes habitudes doivent se cultiver pendant l'enfance.  end " +
    "Je vous demande pardon ?  end " +
    "La pointe du crayon s'est émoussée.  end " +
    "Elle a un visage rond.  end " +
    "Nous sommes cinq dans la famille.  end " +
    "Je n'ai rien à voir avec ce crime.  end " +
    "La mesure d'aimer, c'est d'aimer sans mesure.  end " +
    "Ma télévision tomba dans en panne, donc je dus l'emmener réparer.  end " +
    "Notre famille se compose de cinq personnes.  end " +
    "Le bébé ne sait pas encore se servir d'une cuillère.  end " +
    "Il vient d'Angleterre.  end " +
    "J'ai besoin de médicament pour tuer la douleur.  end " +
    "Excusez-moi, pouvez-vous me montrer le chemin jusqu'au prochain village ?  end " +
    "L'homme qui se noyait agrippa à la corde.  end " +
    "Vous ne manquez pas d'air de m'attirer ici sous de faux prétextes.  end " +
    "Le conflit entre les blancs et les noirs dans la ville s'empira.  end " +
    "J'ai une allergie au pollen.  end " +
    "On est en train de parler du problème en ce moment.  end " +
    "Il n'y avait personne ici à part moi.  end " +
    "J'ai déduit de cette lettre qu'il était en colère.  end " +
    "J'ai trouvé ce test difficile.  end " +
    "Choisissez une personne.  end " +
    "Il y a un arrêt de bus pas loin.  end " +
    "Ces jours-ci John boit trop.  end " +
    "Un jour, elle rencontra un loup dans les bois.  end " +
    "Elle aimait le tennis et devint coach.  end " +
    "Pourquoi les punis-tu ?  end " +
    "Pas à pas, on va loin.  end " +
    "C'est tout pour aujourd'hui.  end " +
    "Je voudrais réserver un vol pour Vancouver.  end " +
    "Des garçons de ta classe, qui chante le mieux ?  end " +
    "C'est bien pour vous.  end " +
    "C'est bien, non ?  end " +
    "Avez-vous déjà déjeuné ?  end " +
    "J'ai eu un mal fou.  end " +
    "Les gens sont plus éduqués qu'ils ne l'étaient avant.  end " +
    "Il dort le jour et travaille la nuit.  end " +
    "Marchez-vous main dans la main ?  end " +
    "Notre équipe de foot bat toutes les autres équipes de la ville.  end " +
    "Nous avons été incapables de les joindre jusqu'à ce qu'il soit trop tard.  end " +
    "J'aimerais épouser quelqu'un comme elle.  end " +
    "Elle se vante toujours d'être une bonne nageuse.  end " +
    "Le courant de cette rivière est rapide.  end " +
    "La dame semblait triste, et aussi fatiguée.  end " +
    "Tu aimes la pluie, n'est-ce pas ?  end " +
    "L'idée n'est pas mauvaise.  end " +
    "Il est méchant.  end " +
    "Peux-tu me prêter ton vélo ?  end " +
    "Je voudrais passer un appel à Tokyo, au Japon, le numéro est 3202-5625.  end " +
    "Joignez-vous à nous.  end " +
    "L'acide agit sur les choses qui contiennent du métal.  end " +
    "Maintenant je comprends pourquoi il n'est pas allé à l'université.  end " +
    "Il salua la dame.  end " +
    "Qui a inventé cette machine ?  end " +
    "Vous pouvez inviter vraiment qui vous voulez.  end " +
    "Votre proposition mérite qu'on la considère.  end " +
    "Elle parle difficilement un mot d'anglais.  end " +
    "«Oui, je l'ai fait» a-t-il dit.  end " +
    "Connaître une langue est une chose, l'enseigner en est une autre.  end " +
    "Le feu dévora la ville.  end " +
    "C'est un crayon.  end " +
    "Elle est diplômée en psychologie infantile.  end " +
    "Il s'est allongé sur le lit.  end " +
    "J'ai un job temporaire dans l'entreprise.  end " +
    "Finalement, le vendeur m'a convaincu d'acheter la machine la plus chère.  end " +
    "Il dit qu'il avait peur qu'il ne pleuve.  end " +
    "Que tu aimes ça ou pas n'a pas d'importance.  end " +
    "George a épousé ma sœur.  end " +
    "Puis-je emprunter votre téléphone ?  end " +
    "Travaille dur, et tu réussiras ton examen.  end " +
    "Généralement, on peut dire que la méthode qui convient pour un certain élève ne convient pas pour un autre, de telle sorte que l'efficacité du changement de méthode repose, pour l'essentiel, sur la modification de l'ordre des élèves.  end " +
    "Laisse-moi tranquille.  end " +
    "Sois belle et tais-toi !  end " +
    "Il est resté chez sa tante.  end " +
    "Une fois que vous avez commencé à faire quelque chose, n'abandonnez jamais.  end " +
    "Il ne savait pas bien parler français.  end " +
    "Tom, seul, penché au bord gauche de la phrase, hésitait à sauter, pour en finir avec toute cette histoire.  end " +
    "Cette soupe est trop salée.  end " +
    "Les lapins ont de grandes oreilles.  end " +
    "Il mange beaucoup.  end " +
    "C'est amusant de jouer aux cartes.  end " +
    "La meilleure façon de savoir comment est un pays est d'y aller pour voir de ses propres yeux.  end " +
    "Il aurait dû acheter quelques stylos.  end " +
    "Si les internautes sont des abeilles, à qui appartiennent les ruches ?  end " +
    "Mon crime me semble irréel.  end " +
    "Je voudrais être assis dans le compartiment non-fumeur s'il vous plaît.  end " +
    "Tu vas le comprendre tout de suite.  end " +
    "Hier, en rentrant de l'école, j'ai été pris sous une averse soudaine.  end " +
    "Tu peux te blesser si tu ne suis pas les procédures de sécurité.  end " +
    "Ils vont surveiller cette île déserte.  end " +
    "Si le temps le permet, nous partirons dans une heure.  end " +
    "Tom affirmait, à en juger par le verbe devant lui, que la phrase était au passé tandis que Mary voyant le participe sous ses yeux, jurait que c'était un présent.  end " +
    "M. Brown, un ami de l'Oregon, viendra nous rendre visite demain.  end " +
    "J'ai besoin d'un crayon, puis-je utiliser un des tiens ?  end " +
    "Où se situe le musée le plus proche ?  end " +
    "Quelle équipe gagnera la partie ?  end " +
    "Le match fut annulé à cause de la pluie.  end " +
    "Tes paroles doivent correspondre à tes actions.  end " +
    "C'était un vieil homme désagréable.  end " +
    "Ayant vécu à Tokyo, je connais bien la ville.  end " +
    "Comment se fait-il que tu saches parler cette langue ?  end " +
    "Helen est très inquiète pour sa fille.  end " +
    "Dépêchez-vous, ou vous manquerez le train.  end " +
    "Elle le pressa de démissionner.  end " +
    "C'est après être arrivé à la maison que j'ai oublié mon porte-monnaie.  end " +
    "Si je venais à mourir, qui s'occuperait de mes enfants ?  end " +
    "Ce chapeau est trop petit pour toi.  end " +
    "Certaines plantes sont rapidement affectées par le froid.  end " +
    "Il faut laisser les chiens qui dorment tranquilles.  end " +
    "Fais-le mais maintenant !  end " +
    "Mon nez coule.  end " +
    "C'est vraiment un parfait idiot.  end " +
    "Les ordinateurs sont capables d'effectuer des tâches extrêmement compliquées.  end " +
    "L'eau de ce puits est potable.  end " +
    "Tout le monde sait que la joie est dans le contentement.  end " +
    "Elle débarrassa le jardin des mauvaises herbes.  end " +
    "Je ne le ferais pas si j'étais à ta place.  end " +
    "Racontez-moi cela, je suis toute ouïe.  end " +
    "C'est de loin la meilleure méthode.  end " +
    "C'est la plus grande tour au Japon.  end " +
    "Qu'en penses-tu ?  end " +
    "Le typhon est parti.  end " +
    "Je sens que quelque chose ne va pas.  end " +
    "Que signifie ce mot ?  end " +
    "Nous allons vous trouver une place bientôt.  end " +
    "C'est la structure la plus massive que j'ai jamais vue.  end " +
    "Nous avons loué un appartement quand nous vivions à New York.  end " +
    "Il sait très bien jouer au tennis.  end " +
    "Comment ?  end " +
    "Par qui a été inventée cette machine ?  end " +
    "Prends soin de toi, s'il te plaît.  end " +
    "Je suis terriblement désolé.  end " +
    "Où as-tu vu Nancy ?  end " +
    "Vos souliers sont ici.  end " +
    "Je savais que tu viendrais.  end " +
    "Oui, je pense que tu devrais y aller.  end " +
    "Non seulement parle-t-elle anglais, mais aussi allemand.  end " +
    "Nous l'avons puni comme le veut la règle.  end " +
    "Mike et sa sœur savent parler français, mais pas le japonais.  end " +
    "Passez-moi le sel, s'il vous plaît.  end " +
    "Je n'aime pas parler en public.  end " +
    "Il nous connaît très bien.  end " +
    "Les Étatsuniens admirent Lincoln pour son honnêteté.  end " +
    "J'ai attendu un des amis pendant une heure.  end " +
    "Ce serait le dernier à te décevoir.  end " +
    "Tu en as peut-être entendu parler.  end " +
    "Les transports modernes nous permettent de faire le tour du monde en quelques jours.  end " +
    "J'ai vu une fille avec de longs cheveux.  end " +
    "Tu peux te garer ici.  end " +
    "Combien de temps cela met-il pour marcher jusqu'à la gare ?  end " +
    "Es-tu déjà allé à Kobe ?  end " +
    "Neigera-t-il ce soir ?  end " +
    "Tu n'as pas besoin d'utiliser un dictionnaire quand tu lis ce livre.  end " +
    "J'ai 19 ans.  end " +
    "Tu dois plus étudier.  end " +
    "À demain au bureau.  end " +
    "Il vaut mieux tard que jamais.  end " +
    "J'ai bien peur de ne pas être du même avis que toi sur ce point.  end " +
    "Le match de foot sera disputé, même s'il doit pleuvoir.  end " +
    "N'importe quelle tâche peut devenir pénible.  end " +
    "Il y a une pomme sur la table.  end " +
    "Pars quand tu veux.  end " +
    "Elle a de longs cheveux.  end " +
    "Ma sœur adore les enfants.  end " +
    "Le suicide est une des causes majeures de décès dans le pays à la plus longue espérance de vie.  end " +
    "Je suis libre.  end " +
    "La première chose que tu dois prendre en considération est le temps.  end " +
    "Il expliqua en détail ce qu'il avait vu.  end " +
    "Un vrai gentleman ne trahit pas ses amis.  end " +
    "N'essaie pas de faire deux choses à la fois.  end " +
    "Que prévois-tu de faire après que tout cela sera fini ?  end " +
    "Le garçon qui joue de la guitare est mon frère.  end " +
    "Fais-moi savoir ton adresse s'il te plaît.  end " +
    "En ce qui concerne cette affaire, je suis très satisfait.  end " +
    "Ce livre est très petit.  end " +
    "Ken va partir aux États-unis fin juillet.  end " +
    "Nous y voilà !  end " +
    "Ceci est la maison où je suis né.  end " +
    "Savez-vous parler anglais ?  end " +
    "Tu as tellement changé que j'ai du mal à te reconnaître.  end " +
    "Ken était-il à la maison hier ?  end " +
    "Quand ce fut le moment de voter, il s'abstint.  end " +
    "Je n'avais aucune idée que cela te causerait autant de problèmes.  end " +
    "Comment c'est dans une école privée ?  end " +
    "As-tu déjà dîné ?  end " +
    "Ce matin j'ai raté de cinq minutes le train de 8h30.  end " +
    "Ma nièce est attirante et mature pour son âge.  end " +
    "N'aimez-vous pas le baseball ?  end " +
    "Quel idiot j'ai été de lui prêter l'argent.  end " +
    "Pourriez-vous me montrer cette jupe, s'il vous plaît ?  end " +
    "Il semble que je sois perdu.  end " +
    "Il n'arriva qu'une fois que je l'avais appelé.  end " +
    "Voudrais-tu danser avec moi ?  end " +
    "Elle rassemble du matériel pour un livre.  end " +
    "Cette montagne est recouverte de neige.  end " +
    "Prends soin de toi.  end " +
    "Cet avion est si moche.  end " +
    "Elle passe beaucoup de temps à exercer son piano.  end " +
    "Qui l'a bâtie ?  end " +
    "Viens pêcher avec moi.  end " +
    "Tu m'entends ?  end " +
    "Je ne peux voir cette image sans repenser à mon enfance.  end " +
    "Posez-la sur la table.  end " +
    "Je ne veux pas qu'il y ait la moindre mécompréhension ici.  end " +
    "Je reviens dans quelques minutes.  end " +
    "La société a abandonné ce projet.  end " +
    "Cet avion décolle à huit heures du matin.  end " +
    "Avez-vous des crayons ?  end " +
    "Il n'y a pas beaucoup de livres sur ces étagères.  end " +
    "Il faut que tu y ailles immédiatement.  end " +
    "En vacances, je pouvais passer des heures à la pêche.  end " +
    "À quels magazines t'abonnes-tu ?  end " +
    "Il entra et, au même moment, la cloche sonna.  end " +
    "Descendons ici.  end " +
    "Je pars pour Vancouver la semaine prochaine pour voir ma sœur.  end " +
    "Je n'en suis pas content.  end " +
    "Personne n'est venu à la fête.  end " +
    "J'aimerais visiter ton pays un de ces jours.  end " +
    "Tu ne devrais pas les garder à attendre aussi longtemps.  end " +
    "Le professeur ordonna que la salle de classe soit nettoyée.  end " +
    "L'humour peut être disséqué comme une grenouille, mais la chose meurt dans l'opération et les entrailles rebutent quiconque à l'exception du pur esprit scientifique.  end " +
    "Il reste chez sa tante.  end " +
    "Ce lieu est pratique pour se baigner.  end " +
    "Elle vécut une longue vie.  end " +
    "L'ingénieur nous a dit comment utiliser la machine.  end " +
    "Écrivez votre nom avec un crayon s'il vous plaît.  end " +
    "D'après ce qu'on dit, son père serait mort à l'étranger.  end " +
    "La glace sur le lac est trop fine pour supporter ton poids.  end " +
    "J'aurais souhaité que vous me le dites.  end " +
    "Bonne journée !  end " +
    "Il confirma que quelque chose n'allait pas avec sa voiture.  end " +
    "Je suis de Singapour.  end " +
    "J'ai rencontré cette fille auparavant.  end " +
    "Je devine à ton visage que tu as de bonnes nouvelles.  end " +
    "Il s'est déguisé en Père Noël pour plaire à ses enfants.  end " +
    "J'ai continué à lire.  end " +
    "Cette école a été fondée en 1650.  end " +
    "Savez-vous parler anglais ?  end " +
    "Il est en harmonie avec tous ses camarades.  end " +
    "Je fais montre de patience.  end " +
    "Ils mirent le feu à la maison de leur voisin pour se venger.  end " +
    "Pourquoi as-tu peint le banc en rouge ?  end " +
    "On est jamais trop vieux pour apprendre.  end " +
    "Personne n'est trop vieux pour apprendre.  end " +
    "Ils font pousser des oranges en Californie.  end " +
    "Hey, que s'est-il passé ?  end " +
    "C'est étrange à dire, mais il ne connaissait pas la nouvelle.  end " +
    "Elle le rencontra pour le petit-déjeuner.  end " +
    "Il est l'heure que tu ailles te coucher. Coupe la radio.  end " +
    "Il économise de l'argent afin qu'il puisse aller à l'université.  end " +
    "C'est la raison pour laquelle je ne suis pas d'accord avec toi.  end " +
    "J'ai le regret de vous informer que votre candidature a été rejetée.  end " +
    "Connais-tu cet hôtel ?  end " +
    "Je ne prends pas de sucre avec mon café.  end " +
    "Elle n'a pas tort.  end " +
    "Il m'a donné dix mille yen.  end " +
    "Arrête de paresser et bouge-toi !  end " +
    "Cela te coutera 100$ pour un vol vers l'île.  end " +
    "Si seulement il n'y avait aucune guerre dans le monde.  end " +
    "C'est le point le plus profond du lac.  end " +
    "Cette boîte-là est plus grande que celle-ci.  end " +
    "Elle est vraiment attentive et patiente.  end " +
    "Je prendrai une coupe de champagne.  end " +
    "Je veux que tu m'attendes jusqu'à ce que je sorte du travail à 7 heures.  end " +
    "Mets tes chaussures et allons dîner.  end " +
    "Pouvez-vous fermer la porte ?  end " +
    "Je n'apprécie guère son comportement hostile.  end " +
    "Bien, je dois partir.  end " +
    "Tu ne me dépasseras jamais, tu entends, jamais !  end " +
    "Il maria sa fille à un banquier.  end " +
    "C'est un petit appartement bruyant mais c'est où je vis et je l'appelle 'maison'.  end " +
    "Il n'a pas tort.  end " +
    "Quand on nous dit de ne pas venir, nous avons encore plus envie de partir.  end " +
    "Quelle est la destination de ce bateau ?  end " +
    "Comment est le temps là-bas ?  end " +
    "Il était impliqué dans l'affaire.  end " +
    "Il travailla au prix de son propre temps.  end " +
    "Tu ne dois pas courir à l'intérieur des bâtiments de l'école.  end " +
    "J'avais travaillé dur toute la journée, donc j'étais très fatigué.  end " +
    "Je n'ai pas envie de faire une marche ce matin.  end " +
    "Est-ce que la réunion peut finir dans les deux heures ?  end " +
    "Il gara sa voiture devant le bâtiment.  end " +
    "Il ne peut dire le vrai du faux.  end " +
    "Personne n'aime qu'on se moque de lui.  end " +
    "J'avais faim.  end " +
    "Pouvez-vous nous prendre en photo avec cet appareil ?  end " +
    "Y a-t-il un zoo dans le parc?  end " +
    "Nous calculâmes que nous pouvions atteindre l'endroit en deux semaines.  end " +
    "Je trouve que tu es vraiment un gars sympa.  end " +
    "Tu peux rester aussi longtemps que tu veux.  end " +
    "C'est sur ce point que nos opinions diffèrent.  end " +
    "L'idée n'est pas mauvaise.  end " +
    "Qui a organisé cette réunion ?  end " +
    "Ses actes de bravoures lui apportèrent la gloire.  end " +
    "Quoi qu'il en soit.  end " +
    "Cette fille n'a pas de mère.  end " +
    "Je suis maintenant à l'aéroport.  end " +
    "Peu importe.  end " +
    "J'ai hâte d'avoir de tes nouvelles.  end " +
    "Effectuez votre travail avec davantage de soin.  end " +
    "Il n'eut aucune difficulté pour trouver la place.  end " +
    "Je ne connaissais pas la ville, et qui plus est, je ne savais pas un mot de la langue.  end " +
    "Je t'expliquerai comment l'utiliser une fois que je serai rentré.  end " +
    "Est-ce la ville où Mika est né ?  end " +
    "Il y avait beaucoup de monde au concert.  end " +
    "«Combien de temps va durer la réunion ?» «Deux heures.»  end " +
    "Tu ne dois pas fumer pendant que tu travailles.  end " +
    "Sais-tu quelle est la distance entre la gare et l'hôtel de ville ?  end " +
    "Ce qui importe ce n'est pas ce que tu lis, mais comment tu lis.  end " +
    "Que voudrais-tu faire pendant que tu es ici ?  end " +
    "Dans des temps difficiles comme ceux-là, aucun effort ordinaire ne peut sortir notre entreprise du rouge.  end " +
    "Nous fûmes stupéfaits d'entendre ce qui s'était passé.  end " +
    "Le Ministère dut faire face à une montagne de questions de la presse.  end " +
    "Son sac est juste ici, donc il ne peut pas être déjà parti à l'école.  end " +
    "Prévoyez-vous de participer à la réunion ?  end " +
    "Elle adore les animaux.  end " +
    "Prends autant de boîtes que tu peux porter.  end " +
    "L'Afrique est un continent, le Groenland non.  end " +
    "Il est nécessaire d'être préparé au pire.  end " +
    "Il sera un bon mari.  end " +
    "Depuis combien de temps es-tu à Shanghai ?  end " +
    "Vous avez seulement à écrire votre nom et adresse ici.  end " +
    "Nous avons tout le temps ce soir.  end " +
    "Ça semble très tentant.  end " +
    "Il arrive difficilement à écrire son nom.  end " +
    "Il commença à chercher un travail.  end " +
    "Curieusement, les gens riches tendent à être plus radins que les pauvres.  end " +
    "Puis-je utiliser votre crayon ?  end " +
    "J'espère que je deviendrai dentiste.  end " +
    "Il va peut-être se mettre à neiger.  end " +
    "C'est une longue histoire.  end " +
    "Dans un accès de rage, il dit tout ce qu'il voulait dire et retourna chez lui.  end " +
    "Le temps change souvent en Angleterre.  end " +
    "J'étais sur le point de partir quand la cloche d'entrée sonna.  end " +
    "Que veut faire ton fils quand il sera grand ?  end " +
    "Un homme doit être honnête.  end " +
    "Il n'a jamais eu de vacances.  end " +
    "Dis-moi comment jouer au jeu.  end " +
    "Ses travaux perdureront pendant des siècles.  end " +
    "J'adore vraiment mon travail.  end " +
    "Tu dois le faire toi-même.  end " +
    "Pressez-vous !  end " +
    "J'ai peur des tremblements de terre.  end " +
    "C'est insoluble dans l'eau.  end " +
    "Cela est sensé d'équilibrer tous les mois la balance de ta carte de crédit.  end " +
    "Crois-tu en Dieu ?  end " +
    "Une chauve-souris est autant un oiseau qu'un rat peut l'être.  end " +
    "Ma voiture a besoin d'être lavée.  end " +
    "Tout le monde s'était moqué de moi.  end " +
    "Tu ferais mieux de ne pas boire autant de café si tard le soir.  end " +
    "Je pensais qu'elle était mignonne.  end " +
    "Au mieux, nous ne pouvons espérer qu'un petit bénéfice.  end " +
    "Tu ne devrais pas boire autant de café tard dans la nuit.  end " +
    "Je veux attraper celui de minuit moins le quart.  end " +
    "Personne n'a été blessé.  end " +
    "As-tu fini ton travail ?  end " +
    "Je suis d'accord avec toi d'une certaine manière.  end " +
    "Tu peux inviter qui tu veux.  end " +
    "Tom, dix mots en arrière, ne voyait pas bien ce mot-ci. Mary, qui était plus près, le lui décrivit.  end " +
    "T'es fâché avec l'algèbre de Boole ?  end " +
    "Je me suis assis à côté de lui.  end " +
    "L'anglais est parlé dans de nombreux pays à travers le monde.  end " +
    "Macbeth de Shakespeare est une tragédie.  end " +
    "L'accusé paraîtra devant la cour vendredi.  end " +
    "Le courant est rapide par ici.  end " +
    "Y a-t-il un zoo dans le parc ?  end " +
    "Quel genre de musiques est en vogue ces temps-ci ?  end " +
    "Identifie les mots que tu ne comprends pas.  end " +
    "Elle était en Amérique le mois dernier.  end " +
    "Hier c'était mon dix-septième anniversaire.  end " +
    "Il faisait froid et il pleuvait également beaucoup.  end " +
    "Le problème est que cela coûte trop cher.  end " +
    "Le temps est devenu beaucoup plus chaud.  end " +
    "Dan aime réaliser des modèles réduits de voitures.  end " +
    "Ce sont tous deux des collègues à moi.  end " +
    "Sais-tu utiliser un ordinateur ?  end " +
    "Ce genre de magazine peut être dommageable pour les jeunes.  end " +
    "Tu ferais mieux de te faire examiner par un médecin.  end " +
    "L'île se situe au sud du Japon.  end " +
    "Il est sûrement en retard pour l'école.  end " +
    "Arrête de dire n'importe quoi !  end " +
    "Elle doit avoir plus de 80 ans.  end " +
    "Elle nous invita à sa fête d'anniversaire.  end " +
    "Cette balle, est-elle la tienne ou la sienne ?  end " +
    "Voudras-tu prendre un thé avec moi ?  end " +
    "Mon père s'améliore progressivement.  end " +
    "Elle n'a pas moins de trente ans.  end " +
    "Elle n'est pas gentille avec lui.  end " +
    "La Terre a la forme d'une orange.  end " +
    "Je suis facile à vivre.  end " +
    "Les deux équipes se battirent âprement.  end " +
    "Quoi que tu fasses, tu dois faire de ton mieux.  end " +
    "En regardant simplement ton visage, je sais que tu apportes de bonnes nouvelles.  end " +
    "J'ai dû rester au lit pendant deux jours.  end " +
    "Il était né pour être peintre.  end " +
    "Aucun de mes camarades de classe ne vit près d'ici.  end " +
    "Faites comme il vous dit.  end " +
    "Pour passer d'une phrase à l'autre, Tom tendait son bras. Mary le saisissait fermement et sautait par-dessus le point en évitant de tomber dans l'espace.  end " +
    "Nous nageâmes dans le lac.  end " +
    "Notre siècle a vu un accroissement notable de la somme des connaissances.  end " +
    "Arrête de fumer si tu veux vivre longtemps.  end " +
    "Veuillez faire plus attention à l'avenir.  end " +
    "Je suis fatigué de regarder la télévision.  end " +
    "Je l'ai rencontré par un matin d'hiver.  end " +
    "Finalement elle s'adonna à la tentation et mangea le gâteau en entier.  end " +
    "Cela va sans dire que le temps, c'est de l'argent.  end " +
    "Le destin de Tom et Mary hantait sans cesse l'auteur, accablé par sa propre impuissance à en assumer le poids.  end " +
    "Cela ne fait pas de différence pour moi si Fred vient ou pas.  end " +
    "Me rendriez-vous un service ?  end " +
    "Je ne vois rien du tout de mon oeil droit.  end " +
    "Windows 95 m'a ENCORE pété à la gueule !  end " +
    "Puis-je prendre un peu de repos ?  end " +
    "L'hotel Hilton, s'il vous plait.  end " +
    "C'est dangereux de sauter pour monter abord d'un train en marche.  end " +
    "Que faites-vous ?  end " +
    "Un bon fils est toujours soucieux de plaire à ses parents.  end " +
    "Je suis shanghaien.  end " +
    "Les enfants jouent dans le parc tous les jours.  end " +
    "Je n'ai pas tout à fait compris le nom de ce créateur.  end " +
    "Je les connais.  end " +
    "Où est le musée le plus proche ?  end " +
    "Pourquoi n'entrez-vous pas ?  end " +
    "Il ne faut pas juger une personne à son apparence.  end " +
    "À partir de quand en as-tu besoin ?  end " +
    "Le garçon a une pomme dans sa poche.  end " +
    "Je pensais qu'elle était mignonne.  end " +
    "Je connais la vérité.  end " +
    "Je souhaiterais avoir un ami comme toi.  end " +
    "La structure du cerveau est compliquée.  end " +
    "J'ai capturé des papillons au filet.  end " +
    "Que dirais-tu d'un verre de bière ?  end " +
    "Ce meurtre demeure un mystère.  end " +
    "Une résolution sur un compromis restreint est préférable à rien du tout.  end " +
    "Les feuilles tombent en automne.  end " +
    "Son explication avait éclairci le premier problème, mais j'étais toujours confus en ce qui concernait le second.  end " +
    "Il semblerait que Jack soit malade.  end " +
    "Tom ergotait à propos des phrases le concernant alors que Mary faisait du mieux qu'elle pouvait pour les traduire.  end " +
    "Père n'approuvera jamais mon mariage.  end " +
    "Tu ferais mieux d'y aller à pied.  end " +
    "Ted fut finalement capable de communiquer ses pensées en japonais.  end " +
    "Ne bouge pas ou je tire.  end " +
    "Ils répondirent difficilement à la question de leur professeur.  end " +
    "Il a travaillé très dur.  end " +
    "Quand elle vit qu'ils n'avaient pas d'école, elle en créa une.  end " +
    "La pluie commença à tomber.  end " +
    "Combien de temps comptes-tu rester dans ce pays ?  end " +
    "Elle prit l'un des vases en verre.  end " +
    "Pendant tout ce temps, j'étais là.  end " +
    "Ce bâtiment gris ?  end " +
    "Les femmes étasuniennes n'avaient pas le droit de vote.  end " +
    "Ce jouet est en bois.  end " +
    "C'est au cours de la période glaciaire que le tigre à dents de sabre s'est éteint.  end " +
    "Ils disent qu'il ne reviendra plus.  end " +
    "Ne dissimule pas ce que tu ressens à propos de cela.  end " +
    "Je me sens mieux aujourd'hui.  end " +
    "Toutes les familles heureuses se ressemblent, mais les familles malheureuses le sont chacune à leur manière.  end " +
    "À l'aéroport Kennedy, s'il vous plaît.  end " +
    "Mon père a déjà arrêté de fumer et de boire.  end " +
    "Que présage cette nouvelle ?  end " +
    "Hé ! Quoi de neuf ?  end " +
    "Certaines photos ont été prises au péril de la vie.  end " +
    "L'industrie telle que nous la connaissons aujourd'hui n'existait pas à cette époque.  end " +
    "Les enfants doivent aller au lit sans regarder la télévision.  end " +
    "Ce boulot ne paie pas.  end " +
    "Le vin est fait à partir du raisin.  end " +
    "L'alcool au volant peut être dangereux.  end " +
    "Il est reporter pour le Time.  end " +
    "Viendras-tu me chercher demain matin à sept heures ?  end " +
    "Il s'est fait battre trop facilement.  end " +
    "Je l'ai aidé hier.  end " +
    "Tu veux boire du thé ou du café ?  end " +
    "Il va venir dans un instant.  end " +
    "Ils m'accusèrent de ne pas avoir tenu ma promesse.  end " +
    "J'ai faim !  end " +
    "Il n'a pas encore répondu à ma lettre.  end " +
    "Il n'a pas spécifié quand il reviendrait.  end " +
    "Tu peux inviter n'importe quelle personne que tu aimes.  end " +
    "S'il vous plaît faites-moi voir votre album de timbres.  end " +
    "Tu devrais toujours dire la vérité.  end " +
    "Ça va se rafraîchir ce soir.  end " +
    "Pourrais-je utiliser ton téléphone ?  end " +
    "Autrefois, nous jouions dans le parc.  end " +
    "Le pneu est un peu dégonflé.  end " +
    "Les réfugiés en Afrique recherchent de l'aide.  end " +
    "Deux mois ont passé depuis qu'il est parti pour la France.  end " +
    "Ce lieu est pratique pour se baigner.  end " +
    "Le bébé s'endormit dans le berceau.  end " +
    "D'accord, mais dînons d'abord.  end " +
    "Nick sait très bien parler portugais. C'est parce qu'il l'étudie depuis 5 ans.  end " +
    "Mon avenir est fortement lié aux finances de ma société.  end " +
    "J'ai posé quelques questions au médecin.  end " +
    "Elle parla puérilement.  end " +
    "Ce livre est suffisamment facile pour qu'ils puissent le lire.  end " +
    "C'est tout pour aujourd'hui.  end " +
    "La thèse est finie à l'exception de la conclusion.  end " +
    "J'ai un léger mal de tête à présent.  end " +
    "Il laissa à sa fille une grande fortune.  end " +
    "On n'est jamais trop prudent au volant d'une voiture.  end " +
    "À tout à l'heure !  end " +
    "Je suis très occupé ces temps-ci !  end " +
    "J'ai vu un article sur le blog de Tatoeba qui parlait d'une nouvelle version pour bientôt, l'avez-vous lu ?  end " +
    "Il fit irruption dans la pièce avec sa veste enfilée.  end " +
    "Deux détectives suivirent le suspect.  end " +
    "Le stade fut submergé par les fans de baseball.  end " +
    "Nous sommes heureux de vous aider.  end " +
    "Ma sœur joue aux poupées.  end " +
    "Ils ont des jumelles.  end " +
    "Elle était capable de répondre, qu'importe ce qui était demandé.  end " +
    "S'il pleut demain, je reste à la maison.  end " +
    "Le pauvre jeune homme devint finalement un grand artiste.  end " +
    "Les fiançailles de M. Rogers et de Mlle. Smith ont été annoncées hier.  end " +
    "C'est une fille obstinée.  end " +
    "Il est grand, gros, et toujours occupé.  end " +
    "Je suis le chef de cette équipe.  end " +
    "Nous vivions ici depuis dix ans quand la guerre éclata.  end " +
    "Il fait presque six pieds de haut.  end " +
    "Il n'a pas encore repris conscience.  end " +
    "J'ai le double de ton âge.  end " +
    "Sa maison a été vendue pour 10.000$.  end " +
    "Nous avons une bonne vue sur la mer depuis la fenêtre.  end " +
    "Tom baisait Mary tout en traduisant cette phrase sur son terminal Android.  end " +
    "Nous en savons peu sur son histoire personnelle.  end " +
    "Elle rassemble du matériel pour un livre.  end " +
    "Il est toujours en train de se plaindre que sa chambre est petite.  end " +
    "Le vieil homme tenta de nager 5 kilomètres.  end " +
    "Malheureusement je ne suis pas arrivé à l'heure pour son discours.  end " +
    "Connais-tu l'homme qui te dévisage ?  end " +
    "Peux-tu fermer la porte ?  end " +
    "Connais-tu l'homme qui te dévisage ?  end " +
    "Passez-moi le sel, s'il vous plaît.  end " +
    "Nous nous réunissons ici une fois par semaine.  end " +
    "Tom savait bien que dans toutes les phrases, le dernier mot serait toujours pour Mary.  end " +
    "La capitale du Japon est Tokyo.  end " +
    "Sa mère continuera à travailler.  end " +
    "Il ferait un bon mari.  end " +
    "C'est un casse-tête de décider quoi mettre pour la fête.  end " +
    "Il y a eu beaucoup de neige l'hiver dernier.  end " +
    "Il n'a pas l'air bien. Il a dû trop boire la nuit dernière.  end " +
    "Tom et Mary n'en étaient pas à leur première phrase.  end " +
    "Je reconnais mon erreur.  end " +
    "Peux-tu dire la différence entre un Étatsunien et un Canadien ?  end " +
    "C'est par une première courte phrase que Tom fit la connaissance de Mary.  end " +
    "On dirait qu'il va pleuvoir.  end " +
    "Je vous demande pardon.  end " +
    "Que signifie \"PTA\" ?  end " +
    "Vous ne pouvez pas le manquer.  end " +
    "Je ne vois pas d'autres moyens de lui faire accepter notre proposition.  end " +
    "J'ai deux frères et une sœur.  end " +
    "Pour dire la vérité, je ne l'aime pas trop.  end " +
    "Il m'a appris comment épeler ce mot.  end " +
    "Bob est mon ami.  end " +
    "Longue vie au roi !  end " +
    "Elle disparut lentement dans la forêt brumeuse.  end " +
    "Il s'est allongé sur le lit.  end " +
    "Il y a un banc devant la gare.  end " +
    "Tu ferais mieux de faire comme le médecin t'a conseillé.  end " +
    "Ils fournirent à la bibliothèque de nombreux livres.  end " +
    "La pluie dura une semaine.  end " +
    "Je n'ai pas les moyens d'acheter cela.  end " +
    "Tu devrais le savoir à ton âge.  end " +
    "Mary n'est pas pauvre, au contraire, elle est plutôt riche.  end " +
    "Ils partirent avec un guide juste au cas où ils se perdraient.  end " +
    "Où est-ce que vous avez passé vos vacances ?  end " +
    "Viens vite !  end " +
    "Où nous rencontrerons-nous ?  end " +
    "Le seul accès au village est par la rivière.  end " +
    "C'est comme cela qu'il s'est sorti du danger.  end " +
    "Ma mère suit un régime.  end " +
    "J'essaie de garder de la place pour le dessert.  end " +
    "Vous devriez commencer aussi tôt que possible.  end " +
    "Dites-moi lequel vous voulez.  end " +
    "Je pense qu'il m'est impossible d'écrire une nouvelle en français.  end " +
    "Nul flux sans reflux.  end " +
    "Il plaça les skis sur le dessus de la voiture.  end " +
    "Les exportations de janvier ont été supérieures de 20% par rapport à l'an dernier.  end " +
    "J'ai une allergie au pollen.  end " +
    "J'avais un petit chien quand j'étais petit.  end " +
    "Au vu du ciel, le temps se dégagera dans l'après-midi.  end " +
    "Tu ne me dépasseras jamais, tu entends, jamais !  end " +
    "Personne n'a été blessé.  end " +
    "Je commence à avoir faim.  end " +
    "Ce sont tous les deux mes collègues.  end " +
    "Pardonnez-moi, qui est à l'appareil ?  end " +
    "Elle garde des animaux de compagnie variés.  end " +
    "Le président refusa de répondre à la question.  end " +
    "Donne-moi une autre chance s'il te plaît.  end " +
    "Il prit un jour de congé.  end " +
    "Emi n'a encore jamais écrit de lettre.  end " +
    "Mon père est vraiment très impliqué dans la bourse à présent.  end " +
    "Je ferai n'importe quoi pour vous.  end " +
    "Allume-le, s'il te plait.  end " +
    "Pourriez-vous m'aider s'il vous plaît ?  end " +
    "Alice est enrhumée depuis dimanche dernier.  end " +
    "Nous acceptons volontiers ton offre.  end " +
    "Le prince fut changé en arbre par magie.  end " +
    "Il y a ceux qui traduisent et ceux qui commentent...on voit les résultats !  end " +
    "C'est un livre.  end " +
    "J'espère juste que nous puissions quitter cet horrible endroit.  end " +
    "J'espère qu'elle ira bientôt mieux.  end " +
    "Nous avons regardé un oiseau nourrir ses petits.  end " +
    "Puis-je utiliser ton téléphone ?  end " +
    "J'ai trouvé mon âme sœur en Bob.  end " +
    "J'ai dit qu'il pourrait pleuvoir.  end " +
    "Finir le rapport pour demain est à peu près impossible.  end " +
    "Nous vîmes beaucoup de poissons dans l'étang.  end " +
    "N'importe quand.  end " +
    "Je me demande où elle est partie.  end " +
    "Il est complétement immergé dans sa vie de famille et n'a pas envie de travailler.  end " +
    "Nous sommes arrivés.  end " +
    "Un aller simple pour Birmingham, s'il vous plait.  end " +
    "Bien qu'elle ait été très occupée, elle est quand même venue me voir partir.  end " +
    "Ma sœur ressemble à ma mère.  end " +
    "Voyagez-vous beaucoup ?  end " +
    "Pas moins de cinquante passagers ont été blessés dans cet accident de circulation.  end " +
    "Il sait lire et écrire.  end " +
    "Punir les mauvais et sauver les faibles.  end " +
    "Ce dictionnaire est à jour.  end " +
    "J'ai plus de robes que ma sœur.  end " +
    "La capitale du Japon est Tokyo.  end " +
    "Ils le laissèrent pour mort.  end " +
    "J'ai entendu dire que Robert est malade.  end " +
    "Quoi ?  end " +
    "Je suis très content de toi.  end " +
    "La lune est invisible derrière les nuages.  end " +
    "S'il vous plaît, appelez-moi plus tard à mon hôtel.  end " +
    "Je pense que je prendrai des vacances cette semaine.  end " +
    "Johanne est aussi charmante que sa sœur.  end " +
    "Les médicaments doivent être hors de la portée des enfants.  end " +
    "J'ai la dalle.  end " +
    "J'aimerais pouvoir arrêter de fumer.  end " +
    "Tom est le capitaine de cette équipe de baseball.  end " +
    "Quel temps fait-il là-bas ?  end " +
    "On ne vend ici que des chaussures pour dames.  end " +
    "Ma sœur s'est fait voler son sac en rentrant chez elle hier soir.  end " +
    "Vous intéressez-vous aux langues étrangères ?  end " +
    "Cela fera deux ans que nous vivons ici avril prochain.  end " +
    "Prends bien soin de toi.  end " +
    "Mis à part quelques erreurs, votre rédaction était excellente.  end " +
    "Je m'assis près d'elle.  end " +
    "Nous étions sur le point d'entrer dans la pièce.  end " +
    "Son échec vient de son ignorance.  end " +
    "On ne vend ici que des chaussures pour dames.  end " +
    "Le démon détruisit Hiroshima et Nagasaki.  end " +
    "Si seulement nous avions un jardin !  end " +
    "C'est cruel de sa part que de lui dire de telles choses.  end " +
    "C'est une bonne chose que de lire de bons livres quand on est jeune.  end " +
    "C'est de loin la meilleure méthode.  end " +
    "Casse-toi.  end " +
    "Je partais de chez moi quand Tom me téléphona.  end " +
    "Il ressent ce prix comme la gloire suprême.  end " +
    "Il possède de nombreux livres d'Histoire.  end " +
    "Oui, je pense que tu devrais y aller.  end " +
    "Les lapins ont de grandes oreilles.  end " +
    "Ses cheveux sont longs.  end " +
    "Elle guidait sa grand-mère en la tenant par la main.  end " +
    "Cette bombe peut tuer beaucoup de personnes.  end " +
    "J'ai entendu dire que Robert est malade.  end " +
    "Pourquoi es-tu venu au Japon ?  end " +
    "Que devraient-ils faire dans cette situation ?  end " +
    "Les kanjis sont difficiles à lire.  end " +
    "Les droits des individus sont importants dans une société libre.  end " +
    "Où penses-tu que tu passeras tes congés ?  end " +
    "Les idéogrammes chinois sont difficiles à lire.  end " +
    "J'attends la fête avec impatience.  end " +
    "On est jamais trop vieux pour apprendre.  end " +
    "Les ordinateurs nous épargnent beaucoup de temps et d'ennuis.  end " +
    "J'attendrai ici jusqu'à ce qu'il revienne.  end " +
    "Je serai vite de retour.  end " +
    "Mon père va de mieux en mieux.  end " +
    "Nous avons envoyé les invitations hier.  end " +
    "Les ambulances transportèrent les blessés à l'hôpital le plus proche.  end " +
    "Ne cours pas si vite.  end " +
    "Connais-tu l'homme qui te regarde ?  end " +
    "On fait le beurre avec de la crème.  end " +
    "Mince, je me suis trompé.  end " +
    "Je suis aussi fatigué que l'on peut l'être.  end " +
    "Sois désormais plus prudente.  end " +
    "Je suis très impatient de voir la nouvelle version de Tatoeba.  end " +
    "C'est ce que je veux.  end " +
    "Elle est fermement déterminée à posséder son propre magasin.  end " +
    "La musique constitue le langage universel.  end " +
    "Tenir un journal intime nous donne aussi une chance de réfléchir sur notre vie quotidienne.  end " +
    "Il est faible en chimie.  end " +
    "Le seigneur avait un pouvoir absolu sur ses sujets.  end " +
    "Ken cria à l'aide.  end " +
    "Décrivez cet accident en détail.  end " +
    "Le contrat est dans la poche, donc sortons fêter ça.  end " +
    "Est-ce que tu sais conduire ?  end " +
    "La Suisse est située entre la France, l'Italie, l'Autriche et l'Allemagne.  end " +
    "Puis-je utiliser votre téléphone ?  end " +
    "Il n'a pas encore répondu à ma lettre.  end " +
    "Jane était sur le point de quitter la maison.  end " +
    "Mes doigts sont tellement engourdis par le froid que je n'arrive pas à jouer du piano.  end " +
    "Tu devrais enrichir ton esprit quand tu es jeune.  end " +
    "La cheminée manquant de bois de chauffage, les flammes ont déjà commencé à perdre de leur vigueur.  end " +
    "J'ai honte de moi-même.  end " +
    "Mon père ne boit pas de liqueur.  end " +
    "Je pense que le fait que la seule forme de vie que nous ayons créée jusqu'à présent soit purement destructive, dit quelque chose de la nature humaine.  end " +
    "Toutes les familles avec des enfants bénéficient de prix réduits.  end " +
    "C'est ce que je pensais.  end " +
    "C'est ce que je pensais.  end " +
    "Il va venir chez moi ce soir.  end " +
    "La moyenne de taille des filles de la classe est au-dessus de 1 mètre 55.  end " +
    "Ma maison ne se situe qu'à un mile d'ici.  end " +
    "Au premier abord, les stagiaires furent mal à l'aise en sa présence.  end " +
    "Laissez-moi vous présenter ma sœur.  end " +
    "Mayuko était seul dans la pièce.  end " +
    "J'en ai plusieurs douzaines.  end " +
    "Pour ma part, je préfère rester chez moi lire un roman.  end " +
    "La voilà !  end " +
    "Le dimanche n'est pas un jour ordinaire pour moi.  end " +
    "Mon père est un chirurgien expert.  end " +
    "Les bâtiments furent secoués lors du tremblement de terre.  end " +
    "Cela me surprend toujours à quel point il peut être stupide.  end " +
    "Nancy a été en bons termes avec ma sœur pendant plus de cinq ans.  end " +
    "Bienvenue à la maison.  end " +
    "Regardez devant vous, je vous prie.  end " +
    "Je me suis marié il y a 8 ans.  end " +
    "Il eut l'amabilité de me conduire à l'hôpital.  end " +
    "Je ne pense pas que cette chemise aille avec cette cravate rouge.  end " +
    "Il y a une bibliothèque dans chaque ville étatsunienne.  end " +
    "Nous restâmes silencieux.  end " +
    "Je n'aime pas cela.  end " +
    "Il s'est marié à une hôtesse de l'air.  end " +
    "Elle est sur le point d'y aller.  end " +
    "La plupart des développeurs détestent déboguer, c'est beaucoup plus amusant de créer des bogues que de les corriger.  end " +
    "Avez-vous fini votre travail ?  end " +
    "Les ingénieurs sont obsédés par l'énergie solaire.  end " +
    "L'enfant creusa une tombe pour son chien qui venait de mourir.  end " +
    "J'étais inconscient de sa présence.  end " +
    "Les années 90 ont commencé avec la guerre du golfe.  end " +
    "Personne ne crut ce que je dis.  end " +
    "Notre tâche a été aisée jusqu'ici, mais à partir de maintenant cela va être difficile.  end " +
    "Certains de mes camarades sont des vrais noobs ; ils ne connaissent rien en informatique.  end " +
    "Loin de n'être que l'objet de leur relation ambiguë, Mary était le sujet de toute l'attention de Tom.  end " +
    "Je veux du papier.  end " +
    "J'ai besoin de papier.  end " +
    "Notre plan est mal parti dès le début.  end " +
    "Prenez-moi à l'essai pour ce travail, s'il vous plait.  end " +
    "Tu devrais commencer aussi tôt que possible.  end " +
    "Combien de gosses avez-vous ?  end " +
    "Uniquement de l'eau je vous prie.  end " +
    "Nous considérâmes ce rapport comme faux.  end " +
    "Connais-tu l'homme qui te dévisage ?  end " +
    "Il est plein d'énergie.  end " +
    "Elle semblait plus belle que jamais.  end " +
    "Elle me concocta un gâteau.  end " +
    "Une seconde est un soixantième de minute.  end " +
    "Tom de Mary et Mary de Tom étaient alternativement le sujet et l'objet.  end " +
    "As-tu déjà visité Kyoto ?  end " +
    "Prends n'importe quel train sur la voie 5.  end " +
    "Tournez toute votre attention sur ce que vous êtes en train de faire.  end " +
    "Dix ans se sont écoulés.  end " +
    "Sans un dictionnaire, cela sera dur d'étudier l'anglais.  end " +
    "Il y a un bus toutes les quinze minutes.  end " +
    "Je viens juste de finir de déjeuner.  end " +
    "Il est parti pour rester avec son cousin.  end " +
    "Vous pouvez vous servir du gâteau.  end " +
    "Nous sommes arrivés à la conclusion que l'entraide était essentiel pour atteindre ce but.  end " +
    "Ceci est la maison où je suis née.  end " +
    "Crois-tu en un dieu ?  end " +
    "Ils veulent augmenter la production de nourriture en faisant pousser de nouvelles espèces de riz.  end " +
    "Les Japonais ont attaqué Pearl Harbor le 7 décembre 1941.  end " +
    "Mon père est occupé.  end " +
    "Il est ce qu'on appelle un lettré.  end " +
    "C'est notre saison des pluies.  end " +
    "J'ai été en retard à cause de la pluie.  end " +
    "Quelle distance y a-t-il entre ici et le musée ?  end " +
    "Ce sac est à la fois bien et cher.  end " +
    "Nous avons vécu à Osaka pendant dix ans avant de venir à Tokyo.  end " +
    "J'espère que tu iras de nouveau mieux avant longtemps.  end " +
    "Ce chapeau rouge correspond bien avec sa robe.  end " +
    "J'ai bu une tasse de café pour me garder éveillé.  end " +
    "L'Espagne est une démocratie depuis 1975.  end " +
    "Quel est mon numéro de chambre ?  end " +
    "Auriez-vous une bière étrangère ?  end " +
    "Ne néglige pas ton travail.  end " +
    "Le football ne plaît pas à mon père.  end " +
    "Le spectacle était vraiment intéressant. Tu aurais dû venir le voir.  end " +
    "Ne te moque pas de lui parce qu'il a fait une erreur.  end " +
    "Mes parents sont partis à l'aéroport pour dire au-revoir à mon oncle.  end " +
    "On récolte ce que l'on sème.  end " +
    "Si tu te dépêches, tu pourras le rattraper.  end " +
    "J'ai rarement du temps pour lire.  end " +
    "Dis-le en anglais.  end " +
    "Encore une fois.  end " +
    "Quand l'avion arrivera-t-il à Tokyo ?  end " +
    "Sais-tu où je vis ?  end " +
    "Qui lui apprit comment parler anglais ?  end " +
    "La persévérance, comme vous le savez, est la clé du succès.  end " +
    "Savez-vous qui est Rie Miyazawa ?  end " +
    "Je suis triste.  end " +
    "Après cela nous n'avons plus rien entendu de lui.  end " +
    "Dieu est mort et c'est nous qui l'avons tué.  end " +
    "Puis-je m'asseoir ici ?  end " +
    "Tu vas devoir formuler quelques excuses.  end " +
    "Elle me fit signe avant d'entrer à bord de l'avion.  end " +
    "Je respecte les personnes âgées.  end " +
    "On n'est jamais trop vieux pour apprendre.  end " +
    "Elle lui est apparentée.  end " +
    "Puis-je manger ce gâteau ?  end " +
    "Il a beaucoup de livres d'Histoire.  end " +
    "Nous sommes devenus la risée de tout le village.  end " +
    "Le chien qui a mordu l'enfant fut attrapé peu de temps après.  end " +
    "Ce livre de classe est écrit en anglais simplifié.  end " +
    "J'ai remercié Marie pour son aide.  end " +
    "Connaître une langue est une chose, l'enseigner en est une autre.  end " +
    "J'espère clarifier pourquoi je pense que la théorie d'Emmet, à l'origine introduite dans le domaine de l'architecture, est si importante en physique.  end " +
    "Que prends-tu au petit-déjeuner ?  end " +
    "Venez nous rendre visite si vous passez dans le coin.  end " +
    "Je comprends ce que tu ressens.  end " +
    "La réalité est plus étrange que la fiction.  end " +
    "Cette histoire de science-fiction semble intéressante. Me la prêteras-tu quand tu auras fini de la lire ?  end " +
    "Elle est aussi intelligente que belle.  end " +
    "Tous étaient heureux.  end " +
    "Cela n'a aucune importance.  end " +
    "Elle est de loin celle qui travaille le plus dur dans mon entreprise.  end " +
    "Je crois que ce poisson est un poisson d'eau douce.  end " +
    "Il se fit beaucoup d'argent à New-York et retourna dans la petite ville où il était né.  end " +
    "Avec un peu de chance, je peux produire plusieurs pièces par jour.  end " +
    "J'ai lu cette histoire dans un livre.  end " +
    "C'est une personne plutôt active.  end " +
    "Tu n'avais pas besoin de prendre un parapluie avec toi.  end " +
    "Alors que nous atteignions le coin, le lac nous apparut.  end " +
    "Si j'étais à votre place, je ne ferais pas ainsi.  end " +
    "Rien n'est aussi important que la paix.  end " +
    "Tu peux inviter qui tu veux.  end " +
    "Lire des livres est intéressant.  end " +
    "Nous utilisons notre bouche pour manger.  end " +
    "Je suis pour ainsi dire heureux.  end " +
    "Apprends ces noms par cœur.  end " +
    "Un enfant brûlé craint le feu.  end " +
    "Garde l'argent en lieu sûr.  end " +
    "Ton nouvel ordinateur marche bien ?  end " +
    "Il n'est plus comme il l'était.  end " +
    "Je veux te faire travailler plus dur.  end " +
    "Le chapeau rouge va bien avec sa robe.  end " +
    "Ce café est si chaud que je n'arrive pas à le boire.  end " +
    "Tu devrais au moins dire « merci ».  end " +
    "Mère était très occupée la plupart du temps.  end " +
    "Nous ne tolérerons jamais le terrorisme.  end " +
    "Ça sent bon !  end " +
    "M. Tanaka n'est pas à son bureau pour le moment.  end " +
    "Lassée d'être l'objet des accusations de Tom, Mary s'enfuit en France dont la langue ne connaît pas de cas accusatif.  end " +
    "Il resta ici un moment.  end " +
    "C'est difficile de garder notre équilibre sur des routes gelées.  end " +
    "Je vous souhaite le bonjour !  end " +
    "Je crois que tu seras bientôt sur pieds.  end " +
    "Mon père travaille pour une banque.  end " +
    "Jouer aux cartes est amusant.  end " +
    "L'appareil photo était pour moi essentiel.  end " +
    "Jack est en chemin pour le succès cette fois-ci.  end " +
    "Si j'étais vous, je ne le ferais pas.  end " +
    "Je serai très heureux de pouvoir te servir.  end " +
    "Je sais ce que tu ressens.  end " +
    "Mon père ne boit pas de liqueur.  end " +
    "Ma chambre est très petite.  end " +
    "Sais-tu nager ?  end " +
    "Nous nous mîmes d'accord pour commencer tôt le lendemain.  end " +
    "Tenez, ceci est ma carte de visite.  end " +
    "J'ai faim !  end " +
    "De façon générale, le climat du Japon est plutôt doux.  end " +
    "Ses yeux se remplirent de larmes.  end " +
    "Vous travaillez avec peine ou bien à peine ?  end " +
    "Mary, ayant exilé Tom, fut promue au début de chaque phrase.  end " +
    "Personne n'est trop vieux pour apprendre.  end " +
    "S'il te plait, envoie-le-moi par fax.  end " +
    "Il est toujours en train de se plaindre à propos de son faible salaire.  end " +
    "Je ne suis pas d'accord avec toi.  end " +
    "Peux-tu répéter ça ?  end " +
    "Les années de résistances et de mauvaises fortunes finirent lorsque le village des colons fut pris par les sauvages ainsi que leurs espoirs et leur vie.  end " +
    "Toute la classe est présente une fois par semaine.  end " +
    "Ann écrivit quelque chose au tableau.  end " +
    "Ils lui remirent le premier prix au concours floral.  end " +
    "Je suis allé à l'aéroport pour lui dire au revoir.  end " +
    "Tu as fait une erreur.  end " +
    "Personne n'a été blessé.  end " +
    "Quelle heure est-il à votre montre ?  end " +
    "Je ne parviens pas à cesser de penser à l'argent volé.  end " +
    "Quelques plantes ne s'adaptent pas au froid.  end " +
    "Qui est cette femme qui porte un manteau brun ?  end " +
    "Des frères ne devraient pas se quereller.  end " +
    "La mer était aussi lisse que le verre.  end " +
    "Cette bombe peut tuer beaucoup de personnes.  end " +
    "Viendra-t-il demain ?  end " +
    "Je pense autrement.  end " +
    "J'apprécie ta coopération.  end " +
    "Elle sera étudiante dans le supérieur le printemps prochain.  end " +
    "S'il vous plaît, faites comme chez vous.  end " +
    "Je me levais toujours tôt dans mon enfance.  end " +
    "Mon père est diplômé de l'université d'Harvard.  end " +
    "Dix jours passèrent.  end " +
    "Tu peux partir ou rester, comme tu le souhaites.  end " +
    "Peut-être neigera-t-il.  end " +
    "J'ai besoin de savoir pour demain.  end " +
    "Je ne sais pas quand elle s'est mariée.  end " +
    "On entend souvent dire que les Japonais sont des bons travailleurs.  end " +
    "Ce jeune aux cheveux longs est rude.  end " +
    "M'écoutes-tu ?  end " +
    "L'anglais n'est pas facile pour moi.  end " +
    "Dis-moi comment il l'a eu.  end " +
    "Quelques camarades me virent lui donner du chocolat.  end " +
    "Référez-vous au guide de l'utilisateur si vous avez le moindre problème.  end " +
    "J'attendrai ici jusqu'à ce qu'il revienne.  end " +
    "Ta petite phrase est trop proprette.  end " +
    "Elle me cuisit un gâteau.  end " +
    "Je n'aime pas cette cravate. Montrez-m'en une autre.  end " +
    "Elle aime cuisiner pour sa famille.  end " +
    "Depuis combien de temps connais-tu Jack ?  end " +
    "Aère le coussin, s'il te plait.  end " +
    "Eriko travailla si longtemps et si fort, sans s'arrêter pour manger, que j'eus peur qu'elle ne défaille (s'évanouisse).  end " +
    "Je n'aime pas cette cravate. Montrez-m'en une autre.  end " +
    "Cet ami, lequel je pensais aurait réussi cet examen, l'a échoué.  end " +
    "C'est l'homme le plus grand que j'ai jamais vu.  end " +
    "Les lapins ont de longues oreilles.  end " +
    "Elle prend des leçons de piano une fois par semaine.  end " +
    "En été, il fait très chaud, ici.  end " +
    "Heureux l'homme qui trouve une bonne épouse.  end " +
    "Tu ne peux pas boire l'eau de mer car elle est trop salée.  end " +
    "Pourrais-tu me dire pourquoi tu l'aimes ?  end " +
    "J'ai été piqué par une abeille.  end " +
    "Puis-je emprunter ce livre ?  end " +
    "En ouvrant la porte, j'ai cassé la serrure.  end " +
    "Où as-tu passé tes vacances ?  end " +
    "Je n'ai pas pris part à la conversation.  end " +
    "Il fait très chaud ici en été.  end " +
    "L'Homme ne pourrait vivre sans air.  end " +
    "Quel homme chanceux il est.  end " +
    "Je garde en tête que les malheurs n'arrivent jamais seuls.  end " +
    "Quel est le nom de ta compagnie d'assurance ?  end " +
    "Merci beaucoup de m'avoir invité à diner l'autre soir.  end " +
    "La musique est une langue commune pour l'humanité.  end " +
    "Ce n'est rien.  end " +
    "C'est un vieil homme et il doit être traité comme tel.  end " +
    "Finissons-en pour aujourd'hui.  end " +
    "On a un jour férié aujourd'hui.  end " +
    "J'ai une douleur aiguë dans la poitrine.  end " +
    "La nation entière fut attristée d'apprendre que son roi était mort.  end " +
    "Il boit tout le temps son café noir.  end " +
    "Je suis désolé de ne pas pouvoir vous rencontrer le 27 février à cause d'un imprévu.  end " +
    "Je préfère voyager en train plutôt que par avion.  end " +
    "Il nous a raconté une histoire tellement drôle que nous avons tous ri.  end " +
    "Il sera un bon mari.  end " +
    "Je ferai comme tu m'as conseillé.  end " +
    "Un large pilier bloque la vue sur le lac.  end " +
    "Je travaille à différentes heures chaque jour.  end " +
    "Je travaille tous les jours à des heures différentes.  end " +
    "Les traducteurs allemands, toujours en retard, n'avaient pas encore traduit cette phrase et Tom et Mary s'inquiétaient de savoir s'ils devraient passer par une autre traduction pour atteindre la phrase en lojban.  end " +
    "Ce sont tous les deux de bons professeurs.  end " +
    "Plus vite !  end " +
    "Qu'en penses-tu ?  end " +
    "S'étant réconciliés après une longue brouille, Tom et Mary se retrouvèrent au milieu de cette phrase.  end " +
    "Le meurtre est passible de la peine capitale.  end " +
    "Ton oncle t'a-t-il laissé conduire sa voiture ?  end " +
    "Elle était occupée à tricoter.  end " +
    "La rumeur s'avéra infondée.  end " +
    "Le mieux est souvent l'ennemi du bien.  end " +
    "Tu dois mettre fin à ce stupide comportement.  end " +
    "Pour dire vrai, je ne l'aime pas.  end " +
    "Cette maison a six pièces.  end " +
    "Quelqu'un m'a-t-il appelé pendant que j'étais sorti ?  end " +
    "Tu peux faire un tour sur ma mobylette.  end " +
    "Ne jugez jamais sur les apparences.  end " +
    "Il n'a pas l'air bien. Il a dû trop boire la nuit dernière.  end " +
    "Une feuille morte tomba au sol.  end " +
    "On a enfin su la vérité.  end " +
    "Je n'aime pas la façon dont tu te moques d'elle.  end " +
    "Ma sœur prend une douche tous les matins.  end " +
    "Nous partirons après-demain.  end " +
    "Tu peux choisir n'importe quelle couleur que tu aimes.  end " +
    "Tu peux prendre la route que tu veux.  end " +
    "Ma sœur prend une douche tous les matins.  end " +
    "Raconte-moi, je suis tout ouïe.  end " +
    "J'étais déçue.  end " +
    "Cela fait dix ans que mon père est mort.  end " +
    "Cognez à la porte, s'il vous plait.  end " +
    "Il m'a confectionné un costume.  end " +
    "Pouvez-vous m'indiquer le chemin du port ?  end " +
    "Comme j'ai un mauvais rhume, je vais consulter un médecin.  end " +
    "J'ai eu une bonne idée.  end " +
    "Ça ressemble à de la neige.  end " +
    "Elle dépense la plupart de son argent dans ses robes.  end " +
    "Il me semble que nous devrions partir à présent.  end " +
    "Il est très intéressé par l'Histoire du Japon. Nous sommes surpris par l'étendue de ses connaissances sur le sujet.  end " +
    "Allez bon.  end " +
    "Je te suis très reconnaissant pour ton conseil.  end " +
    "Je dois réduire mes dépenses ce mois-ci.  end " +
    "Il nous donna non seulement des habits, mais aussi un peu d'argent.  end " +
    "C'est une belle journée !  end " +
    "Nous irons d'abord à Hong Kong, et ensuite à Singapour.  end " +
    "Je ne peux pas comprendre pourquoi vous êtes si critique à son égard.  end " +
    "Combien coûte cette cravate ?  end " +
    "D'une certaine manière tu as raison, mais j'ai encore des doutes.  end " +
    "Les Étatsuniens ont le droit de porter des armes.  end " +
    "L'ordre du jour de la réunion a été distribué.  end " +
    "Le chien vint vers moi en courant.  end " +
    "Qui s'occupera du chien pendant notre absence ?  end " +
    "Tu dois juste rester silencieux.  end " +
    "C'est la maison où je suis né.  end " +
    "À quelle heure te lèves-tu ?  end " +
    "Qui est-il ?  end " +
    "As-tu un crayon ?  end " +
    "Essaie d'être généreux et pardonne.  end " +
    "Il est en train d'apprendre comment conduire une voiture.  end " +
    "Ma sœur faisait partie du club de basketball l'année dernière.  end " +
    "Des milliers de personnes furent déçues par la publicité.  end " +
    "C'est une personne très intéressante.  end " +
    "Nous vîmes l'enfant monter dans le bus.  end " +
    "Dans un premier temps personne ne me crut.  end " +
    "Je veux que ce travail soit fini demain à 14 heures.  end " +
    "Un aller simple pour Birmingham, s'il vous plait.  end " +
    "Ken est aussi grand que Bill.  end " +
    "Une hirondelle vole très vite.  end " +
    "L'Homme ne pourrait vivre sans air.  end " +
    "Ma sœur aime les melons, et moi aussi.  end " +
    "Je pris une veste parce qu'il faisait un peu frais ce matin.  end " +
    "Il résolut le problème facilement.  end " +
    "Il était debout au coin de la rue.  end " +
    "Te souviens-tu du jour où nous nous sommes rencontrés pour la première fois ?  end " +
    "Cela est basé sur des suppositions.  end " +
    "Mon père n'aime pas le foot.  end " +
    "Peux-tu me dire pourquoi tu l'aimes ?  end " +
    "Un étudiant ne doit pas perdre de vue sa propre identité.  end " +
    "Il pleut des cordes ce soir.  end " +
    "Je suis ravi de vous avoir rencontré aujourd'hui.  end " +
    "Ma sœur joue du piano tous les jours.  end " +
    "Ma sœur est plus petite que toi.  end " +
    "Je vais attendre ici qu'il revienne.  end " +
    "J'espère que tout ira bien à la fin.  end " +
    "Viens quand tu veux.  end " +
    "Ne marche pas si vite.  end " +
    "Venez quand vous voulez.  end " +
    "Venez quand vous voulez.  end " +
    "Il ne faut pas réveiller le chien qui dort.  end " +
    "Dépêchez-vous !  end " +
    "Vous êtes responsables de ce que vous faites.  end " +
    "Aimes-tu chanter ?  end " +
    "Elle s'évanouit quand elle vit du sang.  end " +
    "Nous avons perdu l'homme de vue dans la foule.  end " +
    "Le train fut retardé à cause des importantes chutes de neige.  end " +
    "Avez-vous déjà eu une maladie grave ?  end " +
    "Même les coeurs de pierre peuvent être émus à en pleurer.  end " +
    "Demain, le travail devra être prêt.  end " +
    "Elle donnera sa photo à qui la veut.  end " +
    "J'habite en ville.  end " +
    "Au plaisir de vous revoir.  end " +
    "Il ronflait bruyamment pendant son sommeil.  end " +
    "Je viens juste d'arriver ici.  end " +
    "Venez quand vous voulez.  end " +
    "Tu dois perfectionner ton anglais.  end " +
    "On récolte ce que l'on sème.  end " +
    "Bientôt, la cité fut occupée par les soldats.  end " +
    "Nous espérions que quelques étudiants seraient venus, mais il n'y en avait aucun dans la classe.  end " +
    "Il dévora son repas.  end " +
    "J'ai promis d'aider mon frère avec ses devoirs.  end " +
    "J'ai des lèvres crevassées.  end " +
    "Si je l'avais su, je vous l'aurais dit.  end " +
    "Si je l'avais su, je vous l'aurais dit.  end " +
    "Le bonheur c'est la santé.  end " +
    "Je ne peux pas être d'accord avec toi.  end " +
    "Nous devons acheter un nouveau tapis pour cette pièce.  end " +
    "La manière la plus rapide de voyager est par avion.  end " +
    "Nous mangeons de sorte que nous pouvons vivre.  end " +
    "Je suis enceinte.  end " +
    "Ce prix n'est pas raisonnable.  end " +
    "Nous mangeons de sorte que nous pouvons vivre.  end " +
    "Ton nom a été mentionné.  end " +
    "Elle s'est presque évanouie.  end " +
    "L'homme assis à côté de moi me parla.  end " +
    "Les deux sœurs sont très belles.  end " +
    "À Rome comme chez les Romains.  end " +
    "Tout le monde savait qu'elle pouvait parler très bien anglais.  end " +
    "Elle pleura en lisant la lettre.  end " +
    "Il y avait deux gâteaux.  end " +
    "La première fois que tu rencontres une personne, tu devrais être attentif à la proximité avec laquelle tu te tiens par rapport à elle.  end " +
    "Bill est complètement différent de son frère.  end " +
    "Le film passionna toute l'audience.  end " +
    "Dieu que j'ai faim !  end " +
    "J'ai faim !  end " +
    "Je te suivrai peu importe où tu vas.  end " +
    "Cette société publie un magazine, n'est-ce pas ?  end " +
    "Comment ose-t-il ouvrir mon courrier !  end " +
    "Vous ne devriez pas faire confiance à cet homme.  end " +
    "Je te suivrai où que tu ailles.  end " +
    "Le nombre de voitures circulant en ville a augmenté.  end " +
    "Le garçon qui joue de la guitare est mon frère.  end " +
    "Je prends toujours un bain avant d'aller me coucher.  end " +
    "J'ai 19 ans.  end " +
    "Cette lettre a-t-elle été écrite par Mary ?  end " +
    "Tout comme le corps a besoin d'exercice, l'esprit a besoin de stimulation pour rester en bonne santé.  end " +
    "C'est la maison où j'habitais quand j'étais jeune.  end " +
    "Il dispose de sa propre chambre.  end " +
    "Je reviens tout de suite.  end " +
    "Personne n'est trop vieux pour apprendre.  end " +
    "Je suis en attente.  end " +
    "Ce garçon a fait exprès de frapper son fils.  end " +
    "Les chaussures sont faites en cuir.  end " +
    "Je suis assez grand pour vivre par mes propres moyens.  end " +
    "Ma mère m'emmena au parc.  end " +
    "Ne pleure plus comme un enfant.  end " +
    "Au revoir !  end " +
    "Il a plus d'argent qu'on ne peut en dépenser.  end " +
    "Hier soir nous avons entendu le président parler à la télévision.  end " +
    "Sais-tu conduire ?  end " +
    "Au revoir !  end " +
    "On dirait qu'il va pleuvoir.  end " +
    "Elle aimait ses enfants pareil.  end " +
    "Ça ne prend pas beaucoup de temps.  end " +
    "Le baseball ne l'intéresse pas beaucoup.  end " +
    "Dis laquelle tu voudrais.  end " +
    "Achetez-le-moi, s'il vous plaît.  end " +
    "Elle parlait d'une voix douce.  end " +
    "« Tom ! Réalises-tu que ces phrases sont très égocentriques : Elles commencent ou finissent toujours par toi ! Voire les deux ! », reprocha-t-elle à Tom.  end " +
    "Il est instituteur.  end " +
    "L'un des jumeaux est en vie, mais l'autre est mort.  end " +
    "Il la connut par le passé, mais à présent ils ne sont plus amis.  end " +
    "Il tomba par hasard sur cette vieille pièce dans un magasin d'antiquités.  end " +
    "Est-ce que les boissons sont gratuites ?  end " +
    "Ce film était vraiment émouvant.  end " +
    "Tu ne devrais pas gaspiller ton temps.  end " +
    "Je voudrais quelque chose de léger.  end " +
    "Une averse commença à tomber.  end " +
    "Il ne s'est pas levé tôt.  end " +
    "Je suis un étudiant de cette école.  end " +
    "Combien de personnes étaient-elles présentes à la réunion ?  end " +
    "Ne fais pas encore la même erreur.  end " +
    "S'il pleut demain, je resterai à la maison.  end " +
    "Il n'y a rien de bon d'en parler.  end " +
    "J'ai 19 ans.  end " +
    "Qui es-tu pour me dire de partir ?  end " +
    "La tomate est sujette à de nombreuses maladies.  end " +
    "Ce ticket est valable pendant trois mois.  end " +
    "Oubliez-le.  end " +
    "Ce mot n'est pas dans mon dictionnaire.  end " +
    "J'ignore ce dont il s'agit.  end " +
    "Mary et Tom se disputèrent au sujet des étiquettes controversées à appliquer à cette phrase.  end " +
    "Mike aimait beaucoup les animaux.  end " +
    "Ces deux idées sont assez distinctes.  end " +
    "Le ciel est bleu.  end " +
    "Qu'êtes-vous en train de faire ?  end " +
    "Il posa la main gentiment sur son épaule.  end " +
    "Entrez !  end " +
    "Je suis à la recherche d'un travail à temps partiel afin de pouvoir m'acheter un nouveau caméscope.  end " +
    "Je connais ces femmes.  end " +
    "Comment dis-tu ?  end " +
    "Je veux me tenir aussi près du bord que je le peux sans aller au-delà. Du bord, on voit toutes les sortes de choses qu'on ne peut voir depuis le centre.  end " +
    "Que fait-elle ?  end " +
    "Il parle anglais aussi couramment que n'importe quel étudiant de sa classe.  end " +
    "Elle dépensa une bonne partie de son argent durant ses congés.  end " +
    "On entend souvent dire que les Japonais sont des bons travailleurs.  end " +
    "Que voudrais-tu faire tant que tu es ici ?  end " +
    "Veuillez m'en montrer une autre.  end " +
    "Ces étudiants sont la crème de la crème de notre école.  end " +
    "Ce film l'a rendue très populaire.  end " +
    "Il ne faut pas fumer dans cette pièce.  end " +
    "Tu dois le faire toi-même.  end " +
    "Il deviendra un bon mari.  end " +
    "Tous les matins ma sœur aînée prend une douche.  end " +
    "Puis-je utiliser votre téléphone ?  end " +
    "Il fait beau aujourd'hui.  end " +
    "Tom et Mary se retrouvèrent alors côte à côte au début de cette phrase et entreprirent de l'explorer.  end " +
    "J'ai acheté ce livre chez Maruzen, le marchand de livres.  end " +
    "Ma sœur s'occupe souvent du bébé.  end " +
    "Viens ici et aide-moi.  end " +
    "Je n'aime pas celui-ci.  end " +
    "Êtes-vous déjà allé à Kyoto ?  end " +
    "Ma maison est près de l'église.  end " +
    "Nous grimpâmes une pente raide.  end " +
    "Je garde toujours un dictionnaire à portée de main.  end " +
    "Il était destiné à ne plus jamais la revoir.  end " +
    "Tous les mots de ce dictionnaire sont importants.  end " +
    "La Terre a la forme d'une orange.  end " +
    "Tous les mots de ce dictionnaire sont importants.  end " +
    "La casquette est trop petite pour moi.  end " +
    "Il exhiba sa nouvelle voiture.  end " +
    "Tout le monde joue au jeu de l'amour.  end " +
    "Le train arrivera en gare probablement avant midi.  end " +
    "Parlons de cela autour d'une tasse de thé, qu'en pensez-vous ?  end " +
    "Cet idiot de Tom aurait dû se douter que le dernier mot de cette phrase serait évidemment pour Mary.  end " +
    "Elle a pleuré en lisant la carte.  end " +
    "Arrête ton char.  end " +
    "Dépêche-toi ou tu vas rater ton train.  end " +
    "Je suis désolé pour ce malentendu.  end " +
    "Prête-moi quelque chose pour couper cela.  end " +
    "Je l'ai rencontré avant-hier.  end " +
    "Les bandes dessinées actuelles comportent beaucoup trop de scènes violentes et sexuelles.  end " +
    "Les rivières débordèrent à cause des pluies torrentielles.  end " +
    "Ça s'est rafraîchi.  end " +
    "Tu n'es pas censée fumer ici.  end " +
    "Frustré de n'être plus l'objet exclusif de ses désirs, Tom relégua Mary.  end " +
    "On est jamais trop vieux pour apprendre.  end " +
    "Je lui ai demandé où je pourrais garer ma voiture.  end " +
    "Toutes les tragédies finissent par une mort.  end " +
    "Quand es-tu revenu de ton voyage ?  end " +
    "Tout mon corps est douloureux.  end " +
    "Quel idiot j'étais de lui prêter de l'argent.  end " +
    "Je n'ai pas encore mangé.  end " +
    "Il y a certainement quelques points qui méritent réflexion.  end " +
    "Vous devez faire plus de sport.  end " +
    "Je finirai ce travail dans une semaine, c'est-à-dire le 5 mai.  end " +
    "Je ne crois pas que cet enfant est venu seul à Tokyo.  end " +
    "Dans quel but est-il venu ici ?  end " +
    "Lorsque tu rencontres une personne pour la première fois, sois attentive à la distance à laquelle tu te tiens d'elle.  end " +
    "Je n'ai jamais été en Europe.  end " +
    "Il plongea la main dans sa poche pour prendre son portefeuille.  end " +
    "Je n'ai jamais été en Europe.  end " +
    "Encore une fois.  end " +
    "Ne laisse plus jamais cela arriver !  end " +
    "Débarrasse-toi de ce genre d'idées naïves.  end " +
    "Je reste à l'hôtel pour le moment.  end " +
    "Mon père va partir à l'étranger la semaine prochaine.  end " +
    "Nous accepterons seulement à cette condition.  end " +
    "Le nombre de personnes qui visitent cette ville augmente d'année en année.  end " +
    "Il pleut des cordes ce soir.  end " +
    "Je ne le sais pas.  end " +
    "Quel fruit aimes-tu le plus ?  end " +
    "Je n'ai rien à voir avec ce crime.  end " +
    "Elle parle beaucoup.  end " +
    "Le mot que Tom et Mary cherchaient, ils ne le trouvèrent qu'à la fin de la phrase, car c'était le mot « perdu ».  end " +
    "Cela me prendra 20 minutes pour aller jusqu'à la gare en taxi.  end " +
    "Sa sœur aînée est plus âgée que mon frère aîné.  end " +
    "Sa grande sœur est plus âgée que mon grand frère.  end " +
    "Qui va le plus vite, un navire ou un train ?  end " +
    "Taro a un grand sens des responsabilités.  end " +
    "Ça ne prendra pas beaucoup de temps.  end " +
    "Il me dit quand dire oui.  end " +
    "Après avoir réfléchi sur ma vie jusqu'à présent, j'ai décidé que j'avais besoin de changer mes objectifs.  end " +
    "Pour comble de malheur, il commença à pleuvoir.  end " +
    "J'étais content d'apprendre ta réussite.  end " +
    "La douleur est partie.  end " +
    "Les politiciens ne nous disent jamais leurs arrières-pensées.  end " +
    "Il est professeur de biologie à Harvard.  end " +
    "Sautez le plus haut possible.  end " +
    "Brian a l'air déprimé.  end " +
    "Participeras-tu à la réunion ?  end " +
    "Lis le message encore une fois.  end " +
    "Ils s'entraidèrent pour faire du festival de l'école un succès.  end " +
    "C'est pratique pour moi de te voir ce soir à dix heures.  end " +
    "J'ai peur d'y aller.  end " +
    "Elle m'a raconté une histoire intéressante.  end " +
    "Ce serait mieux si tu ne buvais pas autant de café tard dans la nuit.  end " +
    "L'Irlande et l'Angleterre sont séparées par la mer.  end " +
    "Mary, cette espiègle, vint coller son nom au début de cette phrase, pour ne pas en laisser le monopole à Tom, alors que ce n'était pas du tout nécessaire.  end " +
    "N'essaie pas de faire deux choses à la fois.  end " +
    "Elle alla dans sa chambre pour changer sa robe.  end " +
    "J'ai beaucoup d'amis pour m'aider.  end " +
    "Une sensation étrange m'envahissait.  end " +
    "Elle a les cheveux longs.  end " +
    "Vas-tu visiter d'autres pays ?  end " +
    "Elle lui retourna son baiser.  end " +
    "Il s'est comporté comme un idiot.  end " +
    "Sais-tu t'exprimer en anglais ?  end " +
    "Ils escaladèrent jusqu'en haut de la falaise.  end " +
    "L'anglais est une langue internationale.  end " +
    "Je vis en ville.  end " +
    "J'adore lire des livres.  end " +
    "Nous devons aller à l'école.  end " +
    "Des douzaines d'étudiants se rassemblèrent là.  end " +
    "Un tel homme est sûr d'échouer.  end " +
    "Je me demande si le niveau de la mer montera vraiment quand la glace au pôle Nord fondra.  end " +
    "J'ai deux frères et une sœur.  end " +
    "Qui est-elle ?  end " +
    "J'ai continué à lire.  end " +
    "La piscine est utilisée en commun par tous les enfants du voisinage.  end " +
    "Laissez-moi en paix !  end " +
    "En d'autres termes, c'est un feignant.  end " +
    "Il m'ordonna de quitter la chambre immédiatement.  end " +
    "Je suis déçu.  end " +
    "L'eau devient solide quand elle gèle.  end " +
    "À mon avis, ce sera difficile de résoudre ce problème.  end " +
    "Je n'ai pas lu tous ces livres.  end " +
    "Son dernier mari était violoniste.  end " +
    "L'un de vous deux, elle ou toi, doit aller là-bas.  end " +
    "Tu ne devrais pas lire les lettres privées des gens sans permission.  end " +
    "Le vase se brisa en mille morceaux.  end " +
    "Linux est un système d'exploitation libre ; vous devriez l'essayer.  end " +
    "Un écrivain est quelqu'un pour lequel écrire est plus difficile qu'aux autres.  end " +
    "J'étais sur le point de quitter la maison quand le téléphone sonna.  end " +
    "Ne laissez pas transparaître vos émotions.  end " +
    "Donnez-nous les outils, et nous finirons le travail.  end " +
    "Ne le penses-tu pas ?  end " +
    "Je n'ai pas encore dîné.  end " +
    "Bien sûr. Bonne chance !  end " +
    "Ces feuilles vertes deviennent rouges ou jaunes à l'automne.  end " +
    "Ton amitié signifie beaucoup pour moi.  end " +
    "Le lac est le plus profond à cet endroit.  end " +
    "Je veux parler à M. Sato s'il vous plaît.  end " +
    "J'ai quelques difficultés à compiler ce programme.  end " +
    "Jim l'accompagna au piano.  end " +
    "Que préfères-tu faire, aller au cinéma ou rester à la maison ?  end " +
    "Ses fables ont fait de Hans Christian Andersen, le plus connu de tous les Danois du monde, une icône de la littérature mondiale.  end " +
    "Ma sœur s'occupe souvent du bébé.  end " +
    "C'est une tâche trop facile pour lui.  end " +
    "Il y a beaucoup de constructions antiques à Rome.  end " +
    "Il doit être stupide de croire une telle chose.  end " +
    "Père est sorti, mais Mère est à la maison.  end " +
    "Qui est-elle ?  end " +
    "Il sera bientôt là.  end " +
    "Il le nota dans son carnet.  end " +
    "Elle a une rose dans la main.  end " +
    "Les feuilles tombent en automne.  end " +
    "Aucun problème !  end " +
    "Tu avais bon après tout.  end " +
    "Les enfants ont besoin de beaucoup de sommeil.  end " +
    "Les nuages s'ouvrirent et laissèrent passer les rayons du soleil.  end " +
    "Les enfants requièrent beaucoup de sommeil.  end " +
    "Venez vite.  end " +
    "Il est en train de nager.  end " +
    "Je vais épargner plus d'argent.  end " +
    "À Rome comme chez les Romains.  end " +
    "Je te demande pardon.  end " +
    "«Est-elle jeune ?» «Oui.»  end " +
    "Je ne mets pas de sucre dans mon café.  end " +
    "Il semble que j'ai perdu ma clé.  end " +
    "La chasse d'eau ne marche pas correctement.  end " +
    "La nouvelle la rendit heureuse.  end " +
    "«Est-elle jeune ?» «Oui.»  end " +
    "Pouvez-vous m'indiquer le chemin du port ?  end " +
    "Personne n'a été blessé.  end " +
    "Je suis désolé de t'avoir autant embêté.  end " +
    "Mère était inquiète à propos des enfants.  end " +
    "Tu n'es pas trop vieux pour apprendre.  end " +
    "As-tu déjà pris ton déjeuner ?  end " +
    "Le soldat fut blessé à la jambe.  end " +
    "Puis-je vous demander une faveur ?  end " +
    "Elle jeta un regard à sa mère.  end " +
    "Il semblerait qu'il se méprend.  end " +
    "Il était en Amérique à ce moment-là.  end " +
    "Je ne sais pas la raison pour laquelle il est absent aujourd'hui.  end " +
    "L'une de ces routes amène à la station.  end " +
    "Je veux aller à Seattle.  end " +
    "Cette boutique est ouverte de 9 heures à 18 heures.  end " +
    "Je suis prêt.  end " +
    "Laisse-moi essayer.  end " +
    "Je promène mon chien dans le parc tous les matins.  end " +
    "L'accident s'est produit avant-hier.  end " +
    "Je n'arrive pas à mettre des mots sur mes sentiments.  end " +
    "Les gens ici sont accoutumés au froid.  end " +
    "La ville fut détruite par les inondations après la tempête.  end " +
    "Je sais parler anglais.  end " +
    "C'est la Salle 839.  end " +
    "Je te suis très reconnaissant pour ton conseil.  end " +
    "Elle aime cuisiner pour sa famille.  end " +
    "Si je l'avais su, je vous l'aurais dit.  end " +
    "J'ai deux filles.  end " +
    "L'aurais-je su, je te l'aurais dit.  end " +
    "Elle semble réservée mais elle a en vérité une forte volonté.  end " +
    "Le sens de cette phrase est obscur.  end " +
    "Le sol est recouvert de neige.  end " +
    "Papa gère le magasin.  end " +
    "Plaît-il ?  end " +
    "Je veux quelqu'un qui sache parler français.  end " +
    "Quoi de mieux que des phrases, pour lier connaissance ?  end " +
    "Quelles sont tes réflexions à ce sujet ?  end " +
    "J'adore les films étasuniens.  end " +
    "Ne saviez-vous pas qu'il est mort il y a deux ans ?  end " +
    "J'ai une autre sœur.  end " +
    "Mais il avait besoin d'un boulot.  end " +
    "J'ai une autre sœur.  end " +
    "Le drapeau rouge indiquait la présence d'un danger.  end " +
    "J'étais trop fatiguée pour continuer à marcher.  end " +
    "Elle aida son père à faire le travail dans le jardin.  end " +
    "C'est une brillante idée.  end " +
    "Il parle aussi bien thai qu'anglais.  end " +
    "Tu ne peux pas boire l'eau de mer car elle est trop salée.  end " +
    "À l'hôtel Hilton s'il vous plait.  end " +
    "Les gens doivent obéir aux règles.  end " +
    "Mary et sa sœur ont gardé tour à tour leur mère malade.  end " +
    "Il reste encore une question que nous devons discuter.  end " +
    "« Es-tu sûr de vouloir appeler la police ? » Lui demandais-je.  end " +
    "On doit respecter les règles.  end " +
    "J'ai vu des larmes dans ses yeux.  end " +
    "Le poisson et le vin rouge ne vont pas bien ensemble.  end " +
    "Si tu disposais d'un million de dollars, que ferais-tu ?  end " +
    "J'en ai terminé.  end " +
    "Nous serons bientôt en mesure de te mettre en prison.  end " +
    "De quoi parlais-tu ?  end " +
    "Tous les êtres humains naissent libres et égaux en dignité et en droits. Ils sont doués de raison et de conscience et doivent agir les uns envers les autres dans un esprit de fraternité.  end " +
    "Je le finirai avant demain après-midi.  end " +
    "Nous avons pris des mesures fortes pour prévenir cela.  end " +
    "On dirait que Jiro a raté son train.  end " +
    "Quand t'es-tu marié ?  end " +
    "Pourquoi avez-vous peint la banque en rouge ?  end " +
    "Il m'a pris par la main.  end " +
    "Allouer plus d'argent à l'éducation stimulera la croissance économique.  end " +
    "Personne ne croit ce que je dis.  end " +
    "Celui qui ne respecte pas les règles devra partir sur-le-champ.  end " +
    "Lorsque j'ai ouvert la porte, j'ai cassé la serrure.  end " +
    "Les conducteurs doivent respecter le code de la route.  end " +
    "Ne dites pas n'importe quoi !  end " +
    "Je veux un bateau qui m'emmènera loin d'ici.  end " +
    "Je veux un bateau qui m'emmènera très loin d'ici.  end " +
    "Son docteur lui ordonna de se reposer.  end " +
    "Il avait appris l'anglais avant qu'il ne parte pour l'Angleterre.  end " +
    "Tes idées sont toutes dépassées.  end " +
    "Il ne dit rien, ce qui la mit en colère.  end " +
    "Il a assurément pris des produits dopants pour arriver à courir aussi vite.  end " +
    "Laisse-moi essayer.  end " +
    "Je souhaite qu'il écrive plus souvent.  end " +
    "As-tu un travail à temps partiel ?  end " +
    "Je ferai n'importe quoi pour toi.  end " +
    "Pouvez-vous changer ce billet s'il vous plaît ?  end " +
    "Tom, laissé seul au début des phrases, n'arrivait pas à s'habituer à l'éloignement croissant de Mary.  end " +
    "Nous avons facilement deviné le mot de passe.  end " +
    "Je n'ai jamais vu ni entendu parler d'une telle chose.  end " +
    "Pour l'instant, je séjourne à l'hôtel.  end " +
    "Les étudiants ne purent donner une réponse.  end " +
    "Tom, désespéré, hurla : « Mary ! Où es-tu ? » depuis l'extrémité gauche de la phrase. « Je crains de n'être désormais totalement à l'opposé de toi », répondit sèchement Mary.  end " +
    "«Aimez-vous les gâteaux ?» «Oui, j'aime ça.»  end " +
    "Un enfant a besoin d'amour.  end " +
    "La pneumonie entraîne des difficultés respiratoires.  end " +
    "Au revoir !  end " +
    "La seule ressource plus précieuse que n'importes quelles autres était la terre.  end " +
    "Je suis très triste d'entendre ça.  end " +
    "Ce n'est pas parce qu'il est bon qu'il est forcément sage.  end " +
    "À plus tard !  end " +
    "Sais-tu quand le musicien viendra ici ?  end " +
    "Ce bébé ne fait rien d'autre que pleurer.  end " +
    "Sais-tu conduire ?  end " +
    "Donnez-moi un verre d’eau, s’il vous plaît.  end " +
    "C'était un grand plaisir pour moi de rencontrer beaucoup d'associés de votre société.  end " +
    "Puis-je savoir où vous travaillez ?  end " +
    "Nous allons peindre le mur.  end " +
    "Nous espérons inviter Peter au Japon dans un futur proche.  end " +
    "Picasso est un artiste célèbre que tout le monde connaît.  end " +
    "Les chats attrapent des souris.  end " +
    "Je n'avais jamais vu ce genre de poisson jusqu'à maintenant.  end " +
    "Je ne suis pas du tout fatigué.  end " +
    "Je n'aime pas parler en public.  end " +
    "Il doit avoir environ 40 ans.  end " +
    "Je ne peux pas m'offrir une aussi bonne caméra que la tienne.  end " +
    "Il faisait très froid hier matin.  end " +
    "Je préfère encore rester à la maison plutôt que de sortir.  end " +
    "Cette boîte contient cinq pommes.  end " +
    "Puis-je manger ce gâteau ?  end " +
    "Il est fier que son père soit un grand scientifique.  end " +
    "Reste cool.  end " +
    "Viens avec nous !  end " +
    "Combien y a-t-il de garçons dans votre classe ?  end " +
    "Laissez-moi devant ce bâtiment, s'il vous plaît.  end " +
    "C'est l'idéologie pour laquelle mon discours est écrit.  end " +
    "Elle n'a pas pu me voir à la fête.  end " +
    "Nous ferions mieux de la laisser seule.  end " +
    "Il n'est pas fou.  end " +
    "C'est un mauvais conducteur.  end " +
    "Tokyo est la capitale du Japon.  end " +
    "Il est nécessaire que tu ailles voir un docteur.  end " +
    "Je n'avais jamais vu de lion avant l'âge de mes dix ans.  end " +
    "Il est idiot au point de croire ça ?  end " +
    "Au mieux il aura peut-être la troisième place.  end " +
    "Mon père est dans un bon état depuis son opération.  end " +
    "Jack a fait beaucoup de fautes dans sa composition.  end " +
    "Quand on est endormi, l'activité corporelle ralentit et la température du corps chute.  end " +
    "En ouvrant la porte, j'ai cassé la serrure.  end " +
    "As-tu encore besoin de thé ?  end " +
    "L'âge des deux enfants additionné ensemble était égale à celui de leur père.  end " +
    "Nos deux héros ayant déserté cette phrase, leurs aventures semblaient bien vouloir se terminer précisément à ce mot-ci.  end " +
    "Je ne pense que John soit fait pour ce travail.  end " +
    "Nous sommes arrivés ici rapidement, n'est-ce pas ?  end " +
    "L'accident s'est produit avant-hier.  end " +
    "J'ai faim !  end " +
    "Es-tu occupé aujourd'hui ?  end " +
    "L'anglais est devenu une langue internationale.  end " +
    "Il deviendra docteur quand il sera grand.  end " +
    "Salue-la de ma part si tu la vois à la fête, s'il te plaît.  end " +
    "Elle est sur le point de s'en aller.  end " +
    "Elle déclina son invitation.  end " +
    "Saute.  end " +
    "Les us et coutumes d'un pays reflètent sa culture.  end " +
    "Combien y a-t-il d'oeufs dans la cuisine ?  end " +
    "Si tu es en difficulté, écris-moi une lettre.  end " +
    "Envoie-moi un message quand tu as des problèmes.  end " +
    "Cette idée est pas mal.  end " +
    "Dimanche dernier, ma famille est allée au zoo pour voir des pandas.  end " +
    "Vous pouvez rester ici aussi longtemps que vous le désirez.  end " +
    "Il prend sa retraite au printemps prochain.  end " +
    "C'est aussi lourd que du plomb.  end " +
    "Tout le monde aime son pays.  end " +
    "Savez-vous ce que c'est d'être réellement affamé ?  end " +
    "C'est un bureau.  end " +
    "Je veux apprendre l'anglais.  end " +
    "Il a déménagé pour le Canada.  end " +
    "Pourquoi est-il venu ici ?  end " +
    "Arrivera-t-il à attraper le train ?  end " +
    "Ce n'est pas important.  end " +
    "Un bon nombre de personnes étaient là.  end " +
    "Les banques prélèvent des intérêts plus hauts sur les crédits aux clients à risque.  end " +
    "Vous aimez le poisson?  end " +
    "Qu'avez-vous dit ? Pouvez-vous le répéter ?  end " +
    "J'aime lire.  end " +
    "C'est de la merde. Jette-le.  end " +
    "Elle dit qu'elle était heureuse.  end " +
    "Je ne pense pas qu'être pauvre soit quelque chose dont on doit avoir honte.  end " +
    "Nicole parle très bien le japonais.  end " +
    "Il y avait seulement six personnes à la réunion.  end " +
    "Qu'est-ce que tu aimes bien ?  end " +
    "L'Irlande et l'Angleterre sont séparées par la mer.  end " +
    "Nous restâmes avec eux tout au long de l'été.  end " +
    "Viens me voir demain.  end " +
    "Nous déjeunâmes à sept heures.  end " +
    "Parles-tu à ton chien ?  end " +
    "Lire un livre est intéressant.  end " +
    "Le jeune homme tendit la main et je la lui serrai.  end " +
    "Qui sème le vent, récolte la tempête.  end " +
    "Je suis un étranger ici.  end " +
    "Je suis un étranger ici.  end " +
    "Cette bibliothèque a plus de 50 000 volumes.  end " +
    "Je fus piquée par une abeille.  end " +
    "Je n'aimais pas la bière à cette époque.  end " +
    "Il sait comment faire une radio.  end " +
    "Je crève de faim.  end " +
    "J'ai un frère.  end " +
    "Elle adore jouer au tennis.  end " +
    "Comment a-t-il fait pour vivre dans une telle pauvreté ?  end " +
    "Qu'en pensez-vous ?  end " +
    "Que penses-tu de ça ?  end " +
    "Je suis très triste.  end " +
    "Est-ce une bonne idée de recruter d'anciens pirates informatiques comme professionnels de la sécurité ?  end " +
    "Je suis Edgar Degas.  end " +
    "Je m'appelle Edgar Degas.  end " +
    "Nous sommes arrivés en vue de la colline.  end " +
    "Il veut se procurer un nouveau dictionnaire.  end " +
    "Je partis tôt de chez moi afin d'avoir une bonne place.  end " +
    "Que dis-tu si on sort dîner ce soir ?  end " +
    "Il fait beau aujourd'hui.  end " +
    "Ma voiture a besoin d'être lavée.  end " +
    "Choisissez une seule personne, s'il vous plaît.  end " +
    "Je n'aime pas cela.  end " +
    "Ne dis pas n'importe quoi !  end " +
    "Qu'est ce que tu fais maintenant?  end " +
    "Il ne s'écoula pas beaucoup de temps avant que nous nous rencontrassions de nouveau par hasard.  end " +
    "Le méchant garçon se perdit et regarda autour de lui.  end " +
    "Je veux me marier avec une fille comme elle.  end " +
    "Une nouvelle équipe fut formée afin de prendre part à la course de bateaux.  end " +
    "Hors de mon chemin, gamin.  end " +
    "J'en ai besoin aussi vite que possible.  end " +
    "Penses-tu qu'il est bien pour la place ?  end " +
    "Cette maligne de Mary improvisa un saute-mot, qui était une méthode beaucoup plus efficace de déplacement dans les phrases. Elle en avait ainsi déjà sauté trois, dont un premier très haut.  end " +
    "Je voudrais pouvoir vivre à un rythme plus relâché, au lieu d'avoir à regarder l'heure tout le temps.  end " +
    "C'est pour ma famille.  end " +
    "J'ai étudié pendant une heure.  end " +
    "Ça je l'ignore.  end " +
    "Le jour du festival coïncide avec celui de l'examen.  end " +
    "Je veux étudier l'anglais.  end " +
    "Es-tu sûr que c'est le bon train ?  end " +
    "Quand est-elle née ?  end " +
    "Enregistrez l'émission sur une bande magnétique.  end " +
    "Combien de temps puis-je garder ce livre ?  end " +
    "Les mesures préventives sont beaucoup plus efficaces que le traitement lui-même.  end " +
    "Le problème, ce n'est pas ce que tu portes, mais comment tu le portes.  end " +
    "Nancy ressemble à ma grande sœur.  end " +
    "Mary dit à Tom: « Commençons par une petite phrase et puis nous verrons bien...»  end " +
    "On ne trouve aucun tigre sauvage en Afrique.  end " +
    "Cette école fut fondée en 1650.  end " +
    "La bougie s'éteignit d'elle-même.  end " +
    "Les Étatsuniens mangent beaucoup de viande.  end " +
    "Où sont les toilettes les plus proches ?  end " +
    "Je ne l'ai jamais entendu mentir.  end " +
    "Elle a essayé diverses méthodes pour maigrir.  end " +
    "Le problème est comment gérons-nous les difficultés actuelles ?  end " +
    "Laisse-moi tranquille !  end " +
    "Je pensais que Tom était gentil.  end " +
    "Cela m'a pris trois heures pour écrire cette lettre.  end " +
    "Il était réputé pour être un génie.  end " +
    "Il est ce qu'on appelle un homme d'action.  end " +
    "J'ai essayé pendant des heures de me rappeler où j'avais mis mes clefs, mais cela m'a complètement échappé.  end " +
    "Les secours scrutèrent la zone, à la recherche de l'enfant.  end " +
    "J'ai un grand frère et une petite sœur.  end " +
    "La réunion s'est finie à 9 heures.  end " +
    "Elle épousa un homme riche.  end " +
    "Référez-vous à la page 10, s'il vous plaît.  end " +
    "Penses-tu qu'il a commis cette erreur intentionnellement ?  end " +
    "Des 50 postulants, il y eut 20 échecs.  end " +
    "Abandonne !  end " +
    "On peut parler en privé ?  end " +
    "Il frotta une allumette.  end " +
    "Combien coûte cette cravate ?  end " +
    "C'est un secret.  end " +
    "Ses mots étaient remplis par la mélancolie.  end " +
    "Comment vas-tu ?  end " +
    "Ceci est un crayon.  end " +
    "J'étais surprise de voir autant de gens au concert.  end " +
    "Y a-t-il quelqu'un qui puisse prononcer ce mot ?  end " +
    "Ils vivent en paix.  end " +
    "Kent est un meneur-né.  end " +
    "Je ne connaissais pas la ville, et qui plus est, je ne savais pas un mot de la langue.  end " +
    "Je m'assis près de lui.  end " +
    "On mange pour vivre.  end " +
    "La sécheresse conduisit à une pénurie de nourriture.  end " +
    "Combien y a-t-il de garçons dans la classe ?  end " +
    "L'anglais n'est pas facile mais est intéressant.  end " +
    "Une montagne n'est pas forcément verte.  end " +
    "À force de repousser les mots vers le début de la phrase, il ne resta plus qu'eux deux à la fin : Mary, Tom.  end " +
    "Mon papa est un peu démodé.  end " +
    "La radio est éteinte.  end " +
    "Quel est ce gros bâtiment en face de nous ?  end " +
    "Il y a quelques livres sur le bureau.  end " +
    "À ma surprise, elle n'arriva pas à répondre à la question.  end " +
    "C'est vraiment triste.  end " +
    "Il est aussi intelligent que n'importe lequel de ses camarades.  end " +
    "Garçon, je voudrais commander.  end " +
    "Elle l'appelle toutes les nuits.  end " +
    "Le nombre de personnes souffrant de problèmes cardiaques a augmenté.  end " +
    "Je la connais.  end " +
    "En été, il fait très chaud, ici.  end " +
    "À quoi te prépares-tu ?  end " +
    "Je suis impatient de voir la nouvelle version de Tatoeba.  end " +
    "Lui parti, Mary resta donc seule dans cette phrase-ci.  end " +
    "Ta montre se trouve sur le bureau.  end " +
    "Je fus d'accord avec elle.  end " +
    "Un chameau est, pour ainsi dire, un bateau dans le désert.  end " +
    "Je parle avec qui ?  end " +
    "Une voiture chère est un symbole de statut social.  end " +
    "Quand elle était à l'Université, Yuriko s'abandonna à des passions sexuelles.  end " +
    "Tout occupé que tu sois, tu dois faire tes devoirs.  end " +
    "La sœur de George m'a fait quelques sandwiches.  end " +
    "Peux-tu m'aider à traduire ces phrases en chinois ?  end " +
    "Il ne peut pas acheter une voiture, encore moins une maison.  end " +
    "Je quitte la maison tous les matins avant huit heures.  end " +
    "Ça te gêne si j'ouvre la fenêtre ?  end " +
    "Je serai de retour en moins de deux.  end " +
    "Résous le mystère qui se cache derrière le meurtre.  end " +
    "J'ai la gorge sèche.  end " +
    "C'est un secret.  end " +
    "Tu parles tellement doucement que je n'arrive pas très bien à entendre ce que tu dis.  end " +
    "Quand le monde connaîtra-t-il une fin ?  end " +
    "Mère Thérésa était une sœur catholique qui vivait et travaillait à Calcutta en Inde.  end " +
    "Comment vas-tu ?  end " +
    "Il était perplexe quant à quel chemin prendre.  end " +
    "Il n'avait jamais vu un garçon aussi méchant.  end " +
    "Passez-moi le patron, s'il vous plait.  end " +
    "Pas moins de trois cents dollars furent nécessaire pour ce travail.  end " +
    "Avez-vous des sœurs ?  end " +
    "Je veux manger.  end " +
    "Je suis allé pêcher dans la rivière hier.  end " +
    "La troisième puissance de 3 est 27.  end " +
    "Il souligna les aspects pratiques de la vie citadine.  end " +
    "Je suis sûr qu'il réussira.  end " +
    "Nous devons respecter les règles.  end " +
    "Tom, comme à son habitude, traînait en début de phrase, tandis que Mary, déjà douze mots devant lui, se trouvait maintenant en son milieu.  end " +
    "Tom se demandait ce qui l'attirait tant à la fin de toutes les phrases et pensait : « Reviens vers moi, Mary ! »  end " +
    "Non seulement eux, mais moi aussi je fus puni par le professeur.  end " +
    "Nous avons tous regardé par la fenêtre.  end " +
    "Je suis fatigué de regarder la télé.  end " +
    "J'en ai besoin aussi vite que possible.  end " +
    "Nous espérions avoir fini le travail avant les vacances.  end " +
    "En été nous avions l'habitude d'aller nager dans la rivière.  end " +
    "Ses yeux se sont emplis de larmes.  end " +
    "C'est mal de dire un mensonge.  end " +
    "Ce n'est pas facile de discerner le bien du mal.  end " +
    "Elle déchira en mille morceaux la lettre.  end " +
    "Dans certaines sociétés, les employés peuvent avoir un travail garanti à vie.  end " +
    "Faire des exercices est bon pour la santé.  end " +
    "Les crayons se vendent par douzaines.  end " +
    "Il est difficilement amical avec ses compagnons de travail.  end " +
    "Il m'a confectionné un nouveau costume.  end " +
    "C'est un secret.  end " +
    "Où as-tu eu l'idée ?  end " +
    "Il y avait des nuages, hier.  end " +
    "Cette image rend mieux de loin.  end " +
    "Aimez-vous chanter ?  end " +
    "Il salua la dame.  end " +
    "Étudies-tu ?  end " +
    "Il salua la dame.  end " +
    "Êtes-vous partis à l'étranger pour le plaisir ou pour le travail ?  end " +
    "Qu'importe combien je lui dis souvent, elle continue de faire la même erreur.  end " +
    "J'ai deux fils, dont l'un est à Tokyo et l'autre à Nagoya.  end " +
    "Pierre a beaucoup de logiciels piratés sur son ordinateur.  end " +
    "Je sais que tu penses avoir compris ce que tu pensais que j'avais dit, mais je ne suis pas sûr que tu as réalisé que ce que tu as entendu n'est pas ce que je voulais dire.  end " +
    "Pouvez-vous répéter cela, s'il vous plaît ?  end " +
    "Calmez-vous !  end " +
    "Les oiseaux construisent un nid au printemps pour élever leurs petits dedans.  end " +
    "Pas de problème !  end " +
    "« Tom ! » « Mary ? » « Est-il possible que nous soyons jamais plus proches que dans cette phrase ? »  end " +
    "Tu as beaucoup d'argent, et je n'en ai pas.  end " +
    "Comment diable l'as-tu eu ?  end " +
    "C'est illégal pour les bicyclettes de doubler les voitures par la droite.  end " +
    "Je vous verrai dans le coin.  end " +
    "Je ne serai pas chez moi dimanche prochain.  end " +
    "Mike est le seul homme du comité.  end " +
    "On récolte ce que l'on sème.  end " +
    "Il n'est pas idiot.  end " +
    "Il dort le jour et travaille la nuit.  end " +
    "Puis-je me reposer un peu ?  end " +
    "On est jamais trop vieux pour apprendre.  end " +
    "Il a deux chats.  end " +
    "Le docteur le guérira peut-être de son cancer.  end " +
    "Il n'est pas idiot.  end " +
    "Le jugement alla à l'encontre du gouvernement.  end " +
    "J'aime lire des livres.  end " +
    "Heureusement, il n'est pas mort.  end " +
    "Bois ta soupe tant qu'elle est chaude.  end " +
    "Entre.  end " +
    "Vous voyez ce que je veux dire ?  end " +
    "C'est tout pour aujourd'hui.  end " +
    "Je ne l'ai pas invité à la fête. Je me sens coupable de ça.  end " +
    "Des gens sont en train de protester contre les armes nucléaires.  end " +
    "Ne lâche pas la corde.  end " +
    "Quand est l'Apocalypse ?  end " +
    "Évitez de traverser cette rue quand il pleut.  end " +
    "Nous sommes vieux amis.  end " +
    "Un architecte connu a construit cette maison.  end " +
    "Demandez-moi quelque chose de plus simple.  end " +
    "Es-tu allé voir un toubib ?  end " +
    "Qu'est devenu son fils ?  end " +
    "M'entendez-vous ?  end " +
    "Tu peux identifier la voix des enfants sans le moindre problème.  end " +
    "Un chien est sensible à l'odeur.  end " +
    "Par cette phrase, l'auteur signifiait à Tom et Mary que leur destin lui échappait, puisqu'il ne comprenait pas le sens profond de ses propres phrases.  end " +
    "Le bateau de pêche qui avait été perdu est retourné à son port sain et sauf.  end " +
    "Une pelleteuse arriva peu de temps après et commença à creuser une route dans la colline pleine de pâquerettes.  end " +
    "Nous sommes entrés dans le rouge l'année dernière.  end " +
    "Dépêche-toi et tu attraperas l'autobus.  end " +
    "Le travail doit être fini pour demain.  end " +
    "J'admets mon erreur.  end " +
    "Si tu te dépêches tu attraperas le bus.  end " +
    "Je suis un étranger ici.  end " +
    "Tu ne dois pas manger trop.  end " +
    "Y a-t-il quelque chose que je doive faire ?  end " +
    "Regarder les oiseaux est un loisir sympa.  end " +
    "Il me donna tout l'argent qu'il avait sur lui.  end " +
    "J'ai deux frères et une sœur.  end " +
    "Il me donna tout l'argent qu'il transportait.  end " +
    "Mary prétendait que Tom était trois mots devant lui, alors que quand il se retourna, il vit qu'entre elle et lui, il n'y en avait bien que deux.  end " +
    "Le vase était brisé en morceaux.  end " +
    "Il me donna tout l'argent qu'il avait sur lui.  end " +
    "Il a beaucoup neigé l'an dernier.  end " +
    "Le Sahara est un grand désert.  end " +
    "Je ne suis pas du tout fatigué.  end " +
    "Elle a un argument.  end " +
    "Je me suis fait piquer par une abeille.  end " +
    "J'aurais dû lire le livre.  end " +
    "Tom parle couramment japonais.  end " +
    "Inutile de me menacer, je ne dirai rien.  end " +
    "Dis celui que tu aimerais.  end " +
    "Calmez-vous.  end " +
    "L'animal en haut à gauche est censé être un dragon.  end " +
    "Elle partit faire du shopping, laissant son jeune enfant tout seul.  end " +
    "Ogai est son auteur préféré.  end " +
    "Pouvez-vous le faire à temps ?  end " +
    "Ma sœur est mariée.  end " +
    "Le fait est qu'ils sont trop jeunes.  end " +
    "À cause de nombreux facteurs malheureux, le nombre de familles mono-parentales est en augmentation.  end " +
    "Plus tu liras de livres, plus tu en sauras.  end " +
    "Elle prit une profonde respiration.  end " +
    "J'ai perdu mon stylo.  end " +
    "Son feignant de petit ami demanda à Beth de lui faire ses devoirs d'Histoire.  end " +
    "Tom n'avait plus qu'un mot à couper pour que de cette phrase, à jamais, disparaisse notre Mary.  end " +
    "Il aime chanter des chansons populaires.  end " +
    "Notre bureau est du côté nord de l'immeuble.  end " +
    "On ne juge pas plus les Nations par leur taille que les individus.  end " +
    "Les femmes vivent généralement plus longtemps que les hommes.  end " +
    "Voudriez-vous lui laisser un message ?  end " +
    "Tout le monde était heureux.  end " +
    "Voilà une lettre pour toi.  end " +
    "Il y a une subtile différence entre les deux mots.  end " +
    "S'il vous plaît, attendez un peu ici.  end " +
    "Est-il nécessaire que je lui en explique la raison ?  end " +
    "Venez avec nous.  end " +
    "Ma sœur habite près de Yokohama.  end " +
    "Elle n'a que deux ans, mais elle peut déjà compter jusqu'à 100.  end " +
    "Il chercha tous les moyens possibles pour s'échapper.  end " +
    "Ma sœur joue du piano chaque jour.  end " +
    "Il l'a fait au frais de sa santé.  end " +
    "Il était présent à la réunion.  end " +
    "Je ne sais parler ni français ni allemand.  end " +
    "Le café est si chaud que je ne peux pas le boire.  end " +
    "J'ai passé mon samedi après-midi à regarder la télévision.  end " +
    "Nous avons eu beaucoup de neige l'année dernière.  end " +
    "C'est secret.  end " +
    "Excusez-moi, je me suis perdu.  end " +
    "Êtes-vous chinois ou japonais ?  end " +
    "Je vis en ville.  end " +
    "Je ne suis pas du tout fatigué.  end " +
    "Quelle heure est-il à votre montre, maintenant ?  end " +
    "As-tu quelque chose à lire ?  end " +
    "Son arme, c'est une bonne mémoire.  end " +
    "Ton stylo est meilleur que le mien.  end " +
    "On vit et on apprend.  end " +
    "Ils me demandèrent quelque chose à boire.  end " +
    "Ils le laissèrent pour mort.  end " +
    "Il fait très humide ici en été, de l'autre côté, il fait très sec en hiver.  end " +
    "Qu'est-ce que ses propos impliquent ?  end " +
    "Il est sûr de réussir l'examen.  end " +
    "La chambre des enfants est mal rangée.  end " +
    "Il devint fou en entendant l'histoire.  end " +
    "Nous sommes vieux amis.  end " +
    "Les gens avaient l'habitude avant de voyager à pied.  end " +
    "Elle est morte paisiblement dans son sommeil.  end " +
    "Je suis très heureux de te rencontrer aujourd'hui.  end " +
    "Aimez-vous les étés frais ?  end " +
    "Pleuvra-t-il demain ?  end " +
    "Un professeur doit être juste avec ses élèves.  end " +
    "La nouvelle se répandit petit à petit.  end " +
    "J'ai besoin de quelqu'un pour réparer mon traitement de texte.  end " +
    "Il a enduré plus de sacrifices pour l'Amérique que la plupart d'entre nous peuvent à peine imaginer.  end " +
    "La fumée montait par la cheminée.  end " +
    "Je devrais arrêter de temporiser.  end " +
    "Elle n'a pas encore entendu la nouvelle.  end " +
    "Les femmes vivent généralement plus longtemps que les hommes.  end " +
    "C'était un plaisir de vous revoir.  end " +
    "Les femmes vivent normalement plus longtemps que les hommes.  end " +
    "Vous avez besoin de plus étudier.  end " +
    "Je n'aime pas le thé, donc je bois généralement du café au petit-déjeuner.  end " +
    "Nous avons deux filles.  end " +
    "Au revoir !  end " +
    "Jouais-tu au tennis hier matin ?  end " +
    "Il a été récompensé par une médaille d'or une fois.  end " +
    "La voilà !  end " +
    "Au revoir !  end " +
    "Tante Wang, c'est moi.  end " +
    "Il est venu de Boston.  end " +
    "Les deux hommes assis sur le banc étaient américains.  end " +
    "Mary tentait de pousser les mots vers l'autre extrémité de la phrase pour faire tomber Tom.  end " +
    "Nous l'avons élue capitaine de notre équipe.  end " +
    "Je ne demande pas la lune.  end " +
    "Tom, ce lourdaud, se tenait à une extrémité de cette phrase, tandis que, trop légère pour le contrebalancer, à l'autre bout, se tenait Mary.  end " +
    "L'horloge ne marche pas.  end " +
    "Heureusement, personne ne fut blessé.  end " +
    "Quel sujet penses-tu l'intéresse ?  end " +
    "Quel est ton métier ?  end " +
    "Il y a une banque en face de la gare.  end " +
    "Il y a un chemin à travers les champs.  end " +
    "Ils s'adaptèrent rapidement au changement.  end " +
    "N'importe qui sera mieux que personne.  end " +
    "Je ne sais pas ce que c’est.  end " +
    "L'horloge ne marche pas.  end " +
    "Un homme doit travailler.  end " +
    "Je viens d'arriver ici.  end " +
    "Enfant, j'avais l'habitude de jouer seul.  end " +
    "Elle aime quand un garçon la regarde.  end " +
    "Je lui ai donné quelques livres.  end " +
    "Le tien est par là-bas.  end " +
    "Si Ted était là, il aurait pu nous aider à nettoyer notre chambre.  end " +
    "Merci pour le cadeau.  end " +
    "J'espère que je ne te dérange pas ?  end " +
    "Les enfants devraient boire du lait tous les jours.  end " +
    "Le garçon nia avoir volé le vélo.  end " +
    "Quoi que tu fasses, tu dois faire de ton mieux.  end " +
    "C'est très gentil de ta part de m'aider.  end " +
    "Tom, qui avait travaillé toute la journée, voulait se reposer.  end " +
    "Ils doivent travailler 8 heures par jour.  end " +
    "Il est prof d'anglais.  end " +
    "Chat échaudé craint l'eau froide.  end " +
    "Je ne suis pas du tout d'accord avec toi.  end " +
    "Il peignit son vélo en rouge.  end " +
    "J'ai huit frères et sœurs.  end " +
    "Fumer a touché ses poumons.  end " +
    "Il est diplômé de Cambridge avec mention.  end " +
    "Il est revenu ici.  end " +
    "Dans sa douleur, elle fondit en larmes.  end " +
    "Je viens d'arriver ici.  end " +
    "Cet ordinateur fonctionne grâce à une batterie.  end " +
    "Je suis heureux d'entendre cela.  end " +
    "Hier elle a vu un homme très grand.  end " +
    "Passé le gué, honni le saint.  end " +
    "Un vrai gentleman ne trahit pas ses amis.  end " +
    "Elle est sympathique avec tout le monde.  end " +
    "Il partit voyager à la recherche d'aventures.  end " +
    "Par-dessus mon cadavre !  end " +
    "Il alla en Amérique étudier la médecine.  end " +
    "S'il vous plaît, remplissez ce questionnaire et envoyez-le-nous.  end " +
    "Savez-vous conduire une voiture ?  end " +
    "Fais comme chez toi.  end " +
    "Êtes-vous déjà allé à Hawaï ?  end " +
    "Cela m'est indifférent qu'il vienne ou pas.  end " +
    "Faites comme chez vous.  end " +
    "Aller-retour ou aller simple ?  end " +
    "J'espère que je ne vous interromps pas.  end " +
    "Mary se demandait si elle comptait pour Tom comme un simple mot ou comme une vraie personne.  end " +
    "Ils vécurent heureux et eurent beaucoup d'enfants.  end " +
    "Montrez-moi votre bras blessé, s'il vous plaît.  end " +
    "Il aime les études, mais aussi le sport.  end " +
    "Ne jugez pas un homme sur son apparence.  end " +
    "Cela va sans dire que M. Tanaka a tout fait par lui-même.  end " +
    "Un, trois et cinq sont des nombres impairs.  end " +
    "Je suis affamée !  end " +
    "Tokyo est une très grande ville.  end " +
    "Un chien a un flair très développé.  end " +
    "Essaie d'utiliser au mieux ton temps.  end " +
    "La police est à la recherche des biens volés depuis près d'un mois.  end " +
    "Ce chapeau est trop petit pour vous.  end " +
    "Bon week-end.  end " +
    "Ton amitié signifie beaucoup pour moi.  end " +
    "Bon week-end.  end " +
    "Est-ce correct pour un médecin de décider quand quelqu'un doit mourir ?  end " +
    "Elle pleurait en lisant la lettre.  end " +
    "Le fait qu'il soit un génie est clair pour tout le monde.  end " +
    "Prends soin de toi.  end " +
    "Bonne chance,  end " +
    "Je t'envoie tout mon amour,  end " +
    "Mes amours,  end " +
    "Je ne suis pas d'accord avec vous.  end " +
    "Calme-toi  end " +
    "Dépêche-toi!  end " +
    "Bonne année!  end " +
    "Ce n'est pas grave.  end " +
    "Vous faites quoi dans la vie ?  end " +
    "Aimes-tu la musique?  end " +
    "Où l'on se verra?  end " +
    "Où est-ce que ça fait mal?  end " +
    "Quoi de neuf?  end " +
    "Quel est le problème?  end " +
    "Aimez-vous cette musique?  end " +
    "Ne vous en faites pas, s'il vous plaît.  end " +
    "Où devons-nous nous rencontrer ?  end " +
    "Que veut dire ce mot?  end " +
    "Qu'est-ce que tu fais?  end " +
    "Qui est-ce? (Pour s'informer de qui est au téléphone)  end " +
    "Quoi de neuf?  end " +
    "Pourrais-tu me faire passer le sel s'il te plaît?  end " +
    "Qui est à l'appareil?  end " +
    "Où est-il?  end " +
    "Qu'en penses-tu?  end " +
    "Quelle sorte de musique est-ce que tu aimes?  end " +
    "A quelle heure est-ce que tu t'es levé?  end " +
    "Qui es-tu?  end " +
    "Qu'est-ce qui ne va pas?  end " +
    "C'est qui?  end " +
    "C'est bon.  end " +
    "C'est pas mal.  end " +
    "Laissez-moi tranquille!  end " +
    "À bientôt.  end " +
    "Bonne journee  end " +
    "Bonjour  end " +
    "J’ai faim  end " +
    "Au revoir.  end " +
    "Je suis triste  end " +
    "Puis-je avoir un verre d'eau ? end ";


var aw = [];
re = /([a-z\-'éèàêçûâî]+|\d+|[.,'_/()?:])/gi;
while ((m = re.exec(str)) != null) {
    if (m.index === re.lastIndex) {
        re.lastIndex++;
    }

    //console.log(m[0], m.index, re.lastIndex);
    aw.push(m[0]);
}

for (x in aw) {
    //   Dlog(aw[x]);
}

var associativeArray = {};
var array = [];


aw.unshift("/start");
aw.push("/stop");


var next = aw[1];
//aw = aw.slice(0,-1);
for (x in aw) {
    // console.log(':-:', typeof(Number(x)) );
    //console.log('::', x, aw[x], aw[Number(x)+1], next );

    if (associativeArray[aw[x]] == undefined) {
        //console.log('==', aw[x], next);
        associativeArray[aw[x]] = [next];
    } else {
        //console.log('=>', aw[x], next);
        var idx = associativeArray[aw[x]].indexOf(next);
        //console.log(idx);
        if (idx == -1) {
            associativeArray[aw[x]].push(next);
        }

    }
    next = aw[Number(x) + 2];
}

//console.log(associativeArray);
console.log("-- < -------------------------------");

console.log(JSON.stringify(associativeArray));
console.log("-- > -------------------------------");
console.log("c'est :", associativeArray["c'est"]);
console.log("_end :", associativeArray["end"]);
//console.log(array);
console.log("-- 0  -------------------------------");