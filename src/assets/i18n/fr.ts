export default {
  appointmentRequests: {
    appointmentRequests: "Demandes de rendez-vous",
    Home: "Accueil",
    AddToFavourites: "Ajouter aux Favoris",
    RemoveFromFavourites: "Supprimer des favoris",
  },
  appointmentPriority: {
    priority: "Priorité",
    companyProfile: "Profil de la société",
  },
  cancellationRequests: {
    acceptRequest: "Accepter la requête",
    action: "Action",
    availableSlotsRequests: "Demandes de créneaux disponibles",
    cancelAppointment: "Annuler rendez-vous",
    changeTime: "Changer le temps",
    comment: "Commentaire",
    companyDelegate: "Entreprise / Délégué",
    companyName: "Nom de la compagnie",
    details: "Détails",
    home: "Accueil",
    instaMatch: "Correspondance d'instance",
    minor: "Mineur",
    mutual: "Mutuel",
    otherRequests: "Autre demande",
    rejectRequest: "Demande de rejet",
    removeFromMyProspects: "Supprimer de mes prospects",
    requests: "Demandes d'annulation",
    requestsByMe: "Demandes d'annulation de ma part",
    requestsForMe: "Demandes d'annulation pour moi",
    slotNumber: "Numéro d'emplacement",
    startTime: "Heure de début",
    withdraw: "Se désister",
    withdrawRequest: "Demande de retrait",
  },
  companyProfile: {
    organization: "Organisation",
    phoneNumber: "Numéro de téléphone",
    website: "Site Internet",
    staff: "Personnel",
  },
  uploadFiles: {
    uploadProfileResource: "Télécharger la ressource de profil",
    profileImage: "largeur maximale de 200 ko. Dimensions optimales : 500 px de largeur par 150 px de hauteur",
    otherFileTypes: "Autres types de fichier : largeur maximale de 4 mo",
    theLargerFiles:
      "Plus le fichier est volumineux, plus les autres délégués prendront du temps à le télécharger et à accéder à l’information",
    selectResourceType: "Sélectionnez le type de ressource ...",
    resourcesFor: "Ressources pour",
    resourceLink: "Lien de ressource :",
    uploaded: "Le fichier a été téléchargé avec succès",
    save: "Sauvegarder",
    delete: "Supprimer",
    deleted: "Le fichier a été supprimé",
    confirmDelete: "Es-tu sûr?",
    noteForDelete: "Vous ne pourrez pas revenir en arrière !",
    resourceType: "Type de ressource",
  },
  companyRegistration: {
    address: "Adresse:",
    city: "Ville:",
    companyRegistrationDetails: "Détails d'enregistrement de la société",
    email: "Courrier",
    faxArea: "Zone de télécopie :",
    faxCountry: "Pays de télécopie :",
    faxNumber: "Numéro de fax:",
    organizationInformation: "Informations sur l'organisation",
    phoneArea: "Zone téléphonique :",
    phoneCountry: "Pays de téléphone :",
    phoneCountryCode: "Indicatif téléphonique du pays :",
    phoneExtension: "Extension de téléphone:",
    phoneNumber: "Numéro de téléphone:",
    tollFreeArea: "Zone sans frais :",
    tollFreeCountry: "Pays sans frais :",
    tollFreeCountryCode: "Indicatif du pays sans frais :",
    tollFreeNumber: "Numéro sans frais:",
    website: "Site Internet:",
  },
  companySearchResult: {
    actions: "Actes",
    available: "Disponible",
    companyProfile: "Profil de la société",
    enterSubject: "Entrez le sujet",
    enterYourMessage: "Entrez votre message",
    newExhibitor: "Nouvel exposant",
    optOut: "SE DÉSENGAGER",
    print: "Impression",
    recommended: "Conseillé",
    removeRequest: "Supprimer la demande",
    requestedByMe: "Demandé par moi",
    requestedForMe: "Demandé pour moi",
    scheduled: "Prévu",
    selectAll: "Tout sélectionner",
    sendAll: "Envoyer tout",
    sendRequest: "Envoyer une demande",
    toggle: "Basculer",
  },
  contact: {
    commInfo: {
      address: "Adresse",
      areaCode: "Indicatif régional",
      billing: "Facturation",
      city: "Ville",
      communication: "La communication",
      country: "Pays",
      countryCode: "Code postal",
      email: "Courrier",
      ext: "Extension",
      fax: "Fax",
      home: "Accueil",
      mobile: "Mobile",
      number: "Nombre",
      phone: "Téléphone",
      pleaseSelect: "Veuillez choisir",
      postalCode: "Code postal",
      publication: "Publication",
      "publication.communication": "Publication , Communication",
      publish: "Publier",
      "publish.communication": "publier, communiquer",
      shipping: "Livraison",
      state: "État",
      tollFree: "Gratuit",
      website: "Site Internet",
      none: "Aucune",
      formValidationMessages: {
        address: {
          // 1️⃣ ADDRESS
          line1: {
            required: "Obligatoire",
          },
          line2: {
            required: "Obligatoire",
          },
          postalCode: {
            required: "Obligatoire",
          },
          cityName: {
            required: "Obligatoire",
          },
          stateId: {
            required: "Obligatoire",
          },
          countryId: {
            required: "Obligatoire",
          },
        },
        phone: {
          // 2️⃣ POSTAL
          countryId: {
            required: "Obligatoire",
          },
          phoneCode: {
            required: "Obligatoire",
          },
          prefix: {
            required: "Obligatoire",
          },
          areaCode: {
            required: "Obligatoire",
            pattern: "motif invalide",
            minlength: "Longueur minimale",
          },
          number: {
            required: "Required",
            pattern: "invalid pattern",
            minlength: "min length",
          },
          extension: {
            required: "Obligatoire",
          },
        },
        fax: {
          // 3️⃣ FAX
          countryId: {
            required: "Obligatoire",
          },
          phoneCode: {
            required: "Obligatoire",
          },
          prefix: {
            required: "Obligatoire",
          },
          areaCode: {
            required: "Required",
            pattern: "invalid pattern",
            minlength: "min length",
          },
          number: {
            required: "Required",
            pattern: "invalid pattern",
            minlength: "min length",
          },
          extension: {
            required: "Obligatoire",
          },
        },
        tollFree: {
          // 4️⃣ TOLL-FREE
          countryId: {
            required: "Obligatoire",
          },
          phoneCode: {
            required: "Obligatoire",
          },
          prefix: {
            required: "Obligatoire",
          },
          areaCode: {
            required: "Required",
            pattern: "invalid pattern",
            minlength: "min length",
          },
          number: {
            required: "Required",
            pattern: "invalid pattern",
            minlength: "min length",
          },
        },
        mobile: {
          // 5️⃣ MOBILE
          countryId: {
            required: "Obligatoire",
          },
          phoneCode: {
            required: "Obligatoire",
          },
          prefix: {
            required: "Obligatoire",
          },
          areaCode: {
            required: "Required",
            pattern: "invalid pattern",
            minlength: "min length",
          },
          number: {
            required: "Required",
            pattern: "invalid pattern",
            minlength: "min length",
          },
        },
        media: {
          email: {
            required: "Obligatoire",
            email: "E-mail non valide",
          },
          website: {
            required: "Obligatoire",
            pattern: "URL non valide",
          },
        },
      },
    },
    company: {
      basicInfo: {
        businessLicenseNumber: "Numéro de licence commerciale",
        companyCategory: "Catégorie d'entreprise",
        companyDescription: "Description de l'entreprise",
        companyName: "Nom de la compagnie",
        companyNumber: "Numéro d'entreprise",
        companyType: "type d'entreprise",
        iataNumber: "Numéro IATA",
        legalName: "Nom légal",
        memberNumber: "Numéro de membre",
        preferredAirCarriers: "Transporteur aérien préféré",
        rfcTaxCode: "Code fiscal RFC",
        primaryContact: "Premier contact",
        membershipType: "tipo de membresía",
        budget: "Budget",
        balance: "Équilibre",
        joinDate: "Date d'inscription",
        expirationDate: "Expiration Date",
        committeeName: "Nom du comité",
        contactInfo: "Coordonnées - visibles par les autres dans les recherches",
        facebookUrl: "L'adresse URL de Facebook",
        twitterUrl: "L'adresse URL de Twitter.",
        instagramUrl: "L'adresse URL de Instagram.",
        linkedinUrl: "L'adresse URL de Linkedin.",
      },
      formValidationMessages: {
        companyName: {
          required: "Ce champ est obligatoire",
        },
        legalName: {
          required: "Ce champ est obligatoire",
        },
        businessLicenseNumber: {
          required: "Ce champ est obligatoire",
        },
        iataNumber: {
          required: "Ce champ est obligatoire",
        },
        preferredAirCarrier: {
          required: "Ce champ est obligatoire",
        },
        rfcTaxCode: {
          required: "Ce champ est obligatoire",
        },
        companyTypeIDs: {
          required: "Ce champ est obligatoire",
        },
        companyCategoryIDs: {
          required: "Ce champ est obligatoire",
        },
        memberNumber: {
          required: "Ce champ est obligatoire",
        },
      },
      popupMessage: {
        updateTitle: "Mettre à jour les informations sur l'entreprise",
        updatedSuccessfully: "Détails des informations sur l'entreprise mis à jour avec succès",
      },
      companyContactDetail: "Coordonnées de l'entreprise",
      linkAllTypesToPublish: "Lier tous les types à publier",
      submitChanges: "Soumettre des changements",
      unlinkAllTypesToPublish: "Dissocier tous les types à publier",
      companyOverview: "Présentation de l'entreprise",
      companyMemberShip: "Adhésion à l'entreprise",
    },
    person: {
      basicInfo: {
        deactivate: "Désactiver",
        deactivateDone: "Désactiver terminé",
        confirmDeactivate: "Êtes-vous sûr de vouloir désactiver cette personne?",
        confirmButtonTextDeactivate: "Oui, désactiver",
        cancelButtonText: "Non, annuler",
        designation: "La désignation",
        dietaryRequests: "Demande diététique",
        emergencyContactName: "Nom à contacter en cas d'urgence",
        emergencyContactPhone: "Téléphone de contact d'urgence",
        female: "Femelle",
        firstName: "Prénom",
        fullName: "Nom",
        memberNumber: "Nombre",
        PersonalInformation: "Informations personnelles",
        password: "mot de passe",
        gender: "Le sexe",
        informalName: "Badge Nom",
        lastName: "Nom de famille",
        male: "Mâle",
        middleName: "Deuxième nom",
        otherMedicalInfo: "Autres informations médicales",
        preferredSeatType: "Identifiant du type de siège préféré",
        salutation: "Salutation",
        specialNeeds: "Besoins spéciaux",
        suffix: "Nom du suffixe",
        title: "Nom du titre",
        allergies: "Allergique",
      },
      formValidationMessages: {
        firstName: {
          required: "Ce champ est obligatoire",
        },
        middleName: {
          required: "Ce champ est obligatoire",
        },
        lastName: {
          required: "Ce champ est obligatoire",
        },
        informalName: {
          required: "Ce champ est obligatoire",
        },
        suffix: {
          required: "Ce champ est obligatoire",
        },
        title: {
          required: "Ce champ est obligatoire",
        },
        gender: {
          required: "Ce champ est obligatoire",
        },
        salutation: {
          required: "Ce champ est obligatoire",
        },
        designation: {
          required: "Ce champ est obligatoire",
        },
        otherMedicalInfo: {
          required: "Ce champ est obligatoire",
        },
        preferredSeatTypeId: {
          required: "Ce champ est obligatoire",
        },
        specialNeeds: {
          required: "Ce champ est obligatoire",
        },
        dietaryRequest: {
          required: "Ce champ est obligatoire",
        },
        emergencyContactName: {
          required: "Ce champ est obligatoire",
        },
        emergencyContactPhone: {
          required: "Ce champ est obligatoire",
        },
      },
      popupMessage: {
        updateTitle: "Mettre à jour les informations personnelles",
        updatedSuccessfully: "Détails des informations sur la personne mis à jour avec succès",
      },
      copyInformationFromCompany: "Copier les informations de l'entreprise",
      linkAllTypesToPublish: "Lier tous les types à publier",
      personContactDetail: "Coordonnées de la personne",
      personOverview: "personne Voir",
      submitChanges: "Soumettre des changements",
      unlinkAllTypesToPublish: "Dissocier tous les types à publier",
    },
    invalidInputs: "Entrées invalides",
  },
  dashboard: {
    dashboard: "Tableau de bord",
    deadlines: "Délais",
    emptySlot: "Emplacement vide",
    eventDashboard: "Site Internet",
    fullSlot: "Emplacement plein",
    home: "Accueil",
    lastDeliveredMessages: "Derniers messages livrés",
    message: "Message",
    messagesByMe: "Messages par moi",
    messagesDetails: "Détails des messages",
    messagesForMe: "Messages pour moi",
    overview: "Vue d'ensemble",
    pendingCancelRequestsByMe: "Demandes d'annulation en attente de ma part",
    pendingCancelRequestsForMe: "en attente Annuler les demandes pour moi",
    pendingRequestsByMe: "Demandes en attente de ma part",
    pendingRequestsForMe: "",
    profileViews: "Vues du profil",
    sender: "Expéditeur",
    slotNumber: "Numéro d'emplacement",
    slots: "Machines à sous",
    unreadMessages: "Messages non lus",
    unreadSentMessages: "Messages envoyés non lus",
  },
  footer: {
    copyright: "Copyright © 2021 Infinité Software Solutions, Inc. Tous droits réservés.",
    version: "Version",
  },
  language: {
    english: "English",
    french: "French",
    spanish: "Spanish",
  },
  nav: {
    search: "Rechercher:",
    darkMode: "Mode sombre:",
    lightMode: "Mode lumière:",
  },
  global: {
    acceptCancelRequest: "a accepté votre demande d'annulation de rendez-vous",
    autoCancelRequest: "a annulé un rendez-vous avec vous dans le créneau numéro",
    automaticAcceptCancellationRequest: "La demande d'annulation a été acceptée automatiquement dans l'emplacement",
    cancelRequest: "demandé d'annuler le rendez-vous numéro",
    choose_language: "Choisissez la langue",
    close: "Fermer",
    enterYourComment: "Entrez votre commentaire",
    error: "Une erreur s'est produite, veuillez réessayer plus tard !",
    website: "Site Internet:",
    locale: "en-US",
    manualRequestSuccessfullySent: "Les personnes ont bien reçu votre demande",
    messageSuccessfullySent: "Message envoyé avec succès",
    minorLimitationError: "A dépassé le nombre spécifié de limitations mineures",
    noScheduleBookFound: "Agenda introuvable pour cet utilisateur",
    priorityDeletedSuccessfully: "Demande supprimée avec succès",
    priorityNotExists: "La priorité saisie n'existe pas dans les priorités actuelles",
    rejectCancelRequest: "a refusé votre demande d'annulation du rendez-vous à",
    rejectManualRequest: " a refusé vos demandes de rendez-vous :",
    requestAccepted: "Accepté votre demande",
    requestAcceptedSuccessfully: "votre demande acceptée avec succès pour",
    requestRemovedSuccessfully: "Demande supprimée avec succès",
    requestSendSuccessfully: "Demande envoyée avec succès",
    scheduleBookLimitationError: "Dépassement du nombre spécifié de limite de carnet d'horaires",
    send: "Envoyer",
    sendMessage: "Envoyer le message",
    tokenIsNotValid: "Le jeton n'est pas valide",
    tryToAcceptManualRequest: "Essayer d'accepter la demande, vous informera après avoir terminé",
    tryToSendManualRequestForAllTarget:
      "Essayer d'envoyer votre demande pour les personnes sélectionnées, vous informera après avoir terminé",
    tryToSendManualRequestSelectedTarget:
      "Essayer d'envoyer votre demande pour la personne sélectionnée, vous avertira une fois terminé",
    userNotHaveScheduleBook: "pas d'horaire Réserver sélectionné",
    userOrPasswordNotCorrect:
      "Le nom d'utilisateur ou le mot de passe ne sont pas corrects, veuillez réessayer plus tard !",
    withdrawCancelRequest: "a retiré les demandes de rendez-vous qu'il avait faites pour vous rencontrer à",
    offlineService: "Il semble que ce service soit actuellement hors ligne",
    readOnlyEvent: "Action non autorisée, car l'événement actuel est en lecture seule.",

    serverError: "ERREUR DU SERVEUR",
    businessError: "ERREUR COMMERCIALE",
    gqlSyntaxError: "ERREUR DE SYNTAXE GQL",
    gqlSyntaxErrorMessage: "La requête GQL n'est pas correcte ou le schéma a été modifié.",
    serverErrorMessage: "cette demande ne peut pas être traitée maintenant",
  },
  instaMatch: {
    action: "Action",
    actions: "Actes",
    cancelAppointment: "Annuler rendez-vous",
    changeTime: "Changer le temps",
    companyProfile: "Profil de la société",
    filteredBy: "Filtre par",
    home: "Accueil",
    info: "Info",
    instaMatch: "Correspondance d'instance",
    manual: "Manuel",
    mutual: "Mutuel",
    newRequest: "Nouvelle requête",
    noShow: "No show",
    open: "Ouvrir",
    pendingCancelRequestsByMe: "Demandes annulées en attente par moi",
    pendingCancelRequestsForMe: "Demandes annulées en attente pour moi",
    requestsByMe: "demandes de ma part",
    requestsForMe: "demandes pour moi",
    slot: "Fente",
  },
  login: {
    LoginRegister: "Connectez-vous ou inscrivez-vous ici pour y accéder.",
    applicationLoginPage: "Page de connexion à l'application",
    enterPassword: "Veuillez entrer le mot de passe",
    enterYourEmail: "Entrer votre Émail",
    enterYourPassword: "Tapez votre mot de passe",
    login: "S'identifier",
    ok: "D'accord",
    password: "Mot de passe",
    scheduleBooks: "Planifier des livres",
    selectYourScheduleBook: "Sélectionnez votre agenda",
    userName: "Nom d'utilisateur",
    validEmail: "Veuillez entrer un identifiant valide",
    validUserName: "Veuillez entrer un nom d'utilisateur valide",
    enterUserName: "Entrez votre nom d'utilisateur",
    memberships: "Adhésions",
    selectYourMembership: "veuillez sélectionner votre adhésion",
    membershipType: "Type d'adhésion",
    associationType: "Type d'association",
    retrieveId: "Oublié votre identifiant de connexion ?",
    retrievePassword: "Mot de passe oublié ?",
    clickHere: "Cliquez ici",
  },
  messages: {
    acceptRequest: "Accepter la requête",
    declineRequest: "Refuser la demande",
    requestsByMe: "Demandes de ma part",
  },
  personRegistration: {
    address: "Adresse:",
    city: "Ville:",
    designation: "La désignation:",
    email: "Courrier",
    faxArea: "Zone de télécopie :",
    faxCountry: "Pays de télécopie :",
    faxNumber: "Numéro de fax:",
    firstName: "Prénom:",
    gender: "Le sexe:",
    lastName: "Nom de famille:",
    loginId: "Identifiant de connexion:",
    personInformation: "Informations sur la personne",
    personInformationCantRetrieved: "Impossible de récupérer les informations sur la personne",
    personRegistrationInformation: "Informations d'enregistrement de la personne",
    phoneArea: "Zone téléphonique :",
    phoneCountry: "Pays de téléphone :",
    phoneCountryCode: "Indicatif téléphonique du pays :",
    phoneExtension: "Extension de téléphone:",
    phoneNumber: "Numéro de téléphone:",
    salutation: "Salutation:",
    suffix: "Suffixe:",
    title: "Titre:",
    tollFreeArea: "Zone sans frais :",
    tollFreeCountry: "Pays sans frais :",
    tollFreeCountryCode: "Indicatif du pays sans frais :",
    tollFreeNumber: "Numéro sans frais:",
    zip: "Zip *: français:",
  },
  requests: {
    acceptRequest: "Accepter la requête",
    action: "Action",
    availableSlotsRequests: "Demandes de créneaux disponibles",
    cancelAppointment: "Annuler rendez-vous",
    cancellationRequestsForMe: "Demandes d'annulation pour moi",
    changeTime: "Changer le temps",
    companyDelegate: "Entreprise / Délégué",
    companyName: "Nom de la compagnie",
    details: "Détails",
    home: "Accueil",
    instaMatch: "Correspondance d'instance",
    minor: "Mineur",
    mutual: "Mutuel",
    otherRequests: "Autre demande",
    rejectRequest: "Demande de rejet",
    removeFromMyProspects: "Supprimer de mes prospects",
    requests: "Demandes",
    requestsByMe: "Demandes de ma part",
    requestsForMe: "Demandes pour moi",
    slotNumber: "Numéro d'emplacement",
    startTime: "Heure de début",
    withdraw: "Se désister",
    withdrawRequest: "Demande de retrait",
  },
  searchDelegates: {
    home: "Accueil",
    searchDelegates: "Rechercher des délégués",
  },
  searchMain: {
    company: "Entreprise",
    companySearchPlaceholder: "Recherche d'entreprise",
    containsPlaceholder: "Contient...",
    delegateFirstName: "Prénom du délégué",
    delegateFirstNamePlaceholder: "Prénom du délégué",
    delegateLastName: "Nom du délégué",
    delegateLastNamePlaceholder: "Nom du délégué",
    home: "Accueil",
    info:
      'Utilisez le champ "Nom de l\'entreprise" dans cette vue pour effectuer une recherche rapide d\'organisation. Pour une recherche étendue, sélectionnez un type d\'entreprise pour afficher les options de critères de recherche. Lorsque vous avez terminé de sélectionner vos critères de recherche, cliquez sur le bouton "Rechercher".',
    loading: "Chargement...",
    search: "Chercher",
    select: "Sélectionner...",
  },
  searchResults: {
    accept: "Acceptez",
    business: "Affaires",
    cultural: "Culturel",
    decline: "Déclin",
    luxury: "Luxe",
    newEngland: "Nouvelle-Angleterre",
    remove: "Retirer",
    searchMembers: "Rechercher des membres",
  },
  sideBarSearch: {
    citySearchPlaceholder: "Recherche de ville",
    company: "Entreprise",
    companySearchPlaceholder: "Recherche d'entreprise",
    country: "Pays",
    delegateFirstNamePlaceholder: "Prénom du délégué",
    delegateLastNamePlaceholder: "Nom du délégué",
    prospectCompanies: "Entreprises Prospects",
    recommendedCompanies: "Entreprises recommandées",
    regType: "Type d'enregistrement",
    reset: "Réinitialiser",
    selectCountry: "Choisissez le pays ...",
    selectRegistrationType: "Sélectionnez le type d'inscription...",
    allRegTypes: "Toute",
    allMemTypes: "Toute",
    selectState: "Sélectionnez l'état ...",
    sideBarSearch: "Filtre",
    sortby: "Trier par",
    state: "État",
  },
  sidebar: {
    appointmentBlockSlot: "Créneaux de bloc de rendez-vous",
    appointmentPriority: "Priorité de rendez-vous",
    appointmentRequests: "Demandes de rendez-vous",
    companyContactDetails: "Coordonnées de l'entreprise",
    connectionHub: "Concentrateur de connexion",
    contactDetails: "Détails du contact",
    emergencyDietaryInformation: "Informations d'urgence et diététiques",
    instaMatch: "Correspondance d'instance",
    logOut: "Connectez - Out",
    organizationProfile: "Profil de l'organisation",
    payInvoices_PrintReceipts: "Payer des factures/Imprimer des reçus",
    personContactDetails: "Coordonnées de la personne",
    personRegistrationInformation: "Informations d'enregistrement de la personne",
    registration: "Enregistrement",
    registrationChanges_Additions: "Modifications/ajouts d'enregistrement",
    requestsByMe: "Demandes de ma part",
    requestsForMe: "Demandes pour moi",
    searchDelegates: "Rechercher des délégués",
    sharedBoothDelegateAssignments: "Affectations de délégué de cabine partagée",
    summary: "Résumé",
    viewCompanyRegistrationDetails: "Afficher les détails d'enregistrement de mon entreprise",
  },
  summary: {
    badgeInformation: "Informations sur le badge",
    email: "Courrier",
    ferrisBueller: "Ferris Büller",
    home: "Accueil",
    loginId: "Identifiant de connexion",
    registrationContact: "Coordonnées d'inscription",
    registrationDate: "Date d'inscription",
    registrationType: "Type d'inscription",
    summary: "Résumé",
  },
  invoicePayment: {
    invoiceDetails: {
      bankDetails: {
        infiniteSoftware: "Solutions logicielles infinies, Inc.",
        makePayableTo: "Payable à :",
        USAOffice: "Bureau des États-Unis :",
        street: "10005 promenade Doré",
        city: "Knoxville, TN 37922",
        phone: "Téléphone : 1-865-622-2504",
        tid: "TID 62 - 1360985",
      },
      invoiceBasicInfo: {
        companyId: "ID de l'entreprise",
        Invoice: "Facture d'achat",
        date: "Date",
        dueDate: "Date d'échéance",
        billTo: "Facturer :",
      },
      invoiceItem: {
        description: "La description",
        quantity: "Quantité",
        rate: "Fréquence",
        amount: "Quantité",
        total: "Le total",
        balanceDue: "Solde dû",
      },
      payNow: "Payez maintenant",
      yourProcessorIsNotValid: "Votre processeur n'est pas valide",
      noApprovalCodeSend: "Pas d'envoi de code d'approbation",
      thankYouForYourTransaction: "Merci pour votre transaction",
      transactionSucceeded: "Transaction réussie!",
      transactionFailed: "La transaction a échoué!",
      returnToInvoices: "Retour aux factures",
    },
    invoiceList: {
      invoiceFor: "Facture de",
      invoiceNumber: "Numéro de facture",
      association: "Association",
      date: "Date",
      total: "Le total",
      amountDue: "Montant dû",
    },
  },
  survey: {
    submitChanges: "soumettre des changements",
    updatedSuccessfully: "mis à jour avec succés",
    notValidFormModel: "certaines questions réponses sont toujours invalides",
    chooseFile: "Choisir le fichier",
    openFile: "fichier ouvert",
    fileNotAllowed: "L'extension de fichier n'est pas autorisée",
    fileTooLarge: "La taille du fichier est trop volumineuse, veuillez en choisir un de moins de {{0}} mégaoctet",
  },
  formErrorMessages: {
    required: "requis",
  },
  subscriptions: {
    title: "ABONNEMENTS",
    subTitle: "si vous souhaitez apporter des modifications à vos abonnements.",
    descriptionButtonTooltip: "",
    PleaseEmail: "S'il vous plaît envoyer un courriel",
    subscriptionName: "Nom de l'abonnement",
    deliveryAddress: "Adresse de livraison",
    unsubscribe: "Se désabonner",
    messageForUnsubscribe: "Veuillez confirmer que vous souhaitez vous désinscrire de cette newsletter",
    confirmationButton: "Oui, désinscrire!",
    unsubscribeDone: "se désabonner terminé",
    promotionalEmailsAllowed: "Vous avez autorisé l'envoi d'e-mails promotionnels de {{0}} à : {{1}}",
    unsubscribeEmail: "Correos electrónicos promocionales con respecto a {{ 0 }} ya no se enviarán a: {{ 1 }}",
    optIntoBulkEmail: "Activer les e-mails en masse",
    optOutOfBulkEmail: "Désactiver les e-mails en masse",
  },
  committees: {
    title: "COMITÉS",
    subTitle: "si vous souhaitez apporter des modifications à vos abonnements.",
    PleaseEmail: "S'il vous plaît envoyer un courriel",
    committeeName: "Nom du comité",
    role: "Rôle",
    status: "Statut",
  },
  travelInfo: {
    header: {
      delTravelInfo: "Informations sur le voyage des délégués",
    },
    messages: {
      requiredFields: "Tous les champs sont obligatoires et doivent être remplis pour terminer cette tâche.",
      pleaseEnter: "Veuillez entrer vos informations d'arrivée et de départ afin que nous puissions mieux vous servir.",
      dateFormat:
        "Le format de la date est MM/JJ/AAAA, par exemple 02/04/2006 et le format de l'heure est HH:MM AM/PM, par exemple 07h30",
      infoSaved: "Vos informations de voyage sont enregistrées.",
      invalidArrDate: "La date d'arrivée que vous aviez saisie n'était pas valide.",
      invalidArrTime: "L'heure d'arrivée que vous avez saisie n'est pas valide.",
      invalidDptDate: "La date de départ que vous aviez saisie n'était pas valide.",
      invalidDptTime: "L'heure de départ que vous aviez saisie n'était pas valide.",
    },
    form: {
      labels: {
        eventBound: "Lié à un événement",
        homeBound: "Relié à la maison",
        arrDate: "Date d'arrivée",
        arrTime: "Heure d'arrivée",
        arrAirport: "Aéroport d'arrivée",
        dptDate: "Date de départ",
        dptTime: "Heure de départ",
        dptAirport: "Aéroport départemental",
        airline: "Compagnie aérienne",
        flightNo: "Vol #",
      },
      Save: "Sauvegarder",
    },
  },
  activity: {
    title: "Détails de l'activité",
    purchaseMessage:
      "Vous avez choisi une/des activité(s) avec un coût associé. Veuillez confirmer que vous souhaitez continuer.",
    confirmButtonText: "Oui",
    cancelButtonText: "Non",
    errors: {
      notAvailableActivity:
        "Vous avez déjà sélectionné un circuit {0}. Veuillez contacter {1} si vous souhaitez modifier votre visite.",
      moreThanOneItemSelected: "Vous ne pouvez choisir qu'un seul {0} circuit",
      nothingSelected: "Vous n'avez sélectionné aucune activité à acheter.",
      duplicatedPurchase: "Vous avez déjà acheté cette activité.",
    },
    updateTitle: "Facture d'activité",
    updatedSuccessfully: "Merci pour votre transaction",
  },
} as typeof import("./en").default;
