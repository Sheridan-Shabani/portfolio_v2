interface Experience {
    poste: string;
    entreprise: string;
    date_debut: string;
    date_fin: string;
    points_principaux: string[];
  }
  
  const ExperiencesData: Experience[] = [
    {
      poste: "Développeur Full-stack",
      entreprise: "XYZ Company",
      date_debut: "2019",
      date_fin: "Present",
      points_principaux: [
        "Développement de nouvelles fonctionnalités pour l'application web de l'entreprise en utilisant React, Node.js et MongoDB.",
        "Collaboration étroite avec l'équipe de conception pour assurer une expérience utilisateur fluide et cohérente.",
        "Utilisation de Git pour le suivi des versions et la collaboration avec les autres membres de l'équipe."
      ]
    },
    {
      poste: "Analyste de données",
      entreprise: "ABC Corporation",
      date_debut: "2017",
      date_fin: "2018",
      points_principaux: [
        "Analyse des données de ventes et des comportements des clients pour fournir des recommandations de marketing et d'amélioration des produits.",
        "Utilisation de Python et SQL pour extraire et manipuler les données, et de Tableau pour la visualisation des données.",
        "Présentation des résultats des analyses à la haute direction et recommandation de stratégies pour améliorer les performances de l'entreprise."
      ]
    },
    {
      poste: "Chef de projet",
      entreprise: "DEF Corporation",
      date_debut: "2016",
      date_fin: "2017",
      points_principaux: [
        "Gestion de projets informatiques de grande envergure, y compris la planification, l'affectation des tâches et la supervision de l'exécution.",
        "Collaboration étroite avec les parties prenantes internes et externes pour assurer la livraison de projets de haute qualité, dans les délais impartis et dans le respect du budget.",
        "Utilisation de méthodes Agile pour la gestion de projets, y compris Scrum et Kanban, pour améliorer l'efficacité et la collaboration de l'équipe."
      ]
    }
  ];
  
  export default ExperiencesData;