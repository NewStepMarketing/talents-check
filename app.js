(function () {
  "use strict";

  var QUESTIONS = [
    {
      id: "bio",
      title: "Deine Bio",
      prompt: "Ist in deiner Bio klar, wer du bist und was du anbietest?",
      options: [
        {
          label: "Keine Bio oder nur Emojis und Zufallstext",
          points: 1,
          tip:
            "Schreib in der ersten Zeile, wer du bist (z. B. Model, Creator, Trainer:in) und in der zweiten, was man bei dir buchen oder sehen kann. Halte es unter 150 Zeichen.",
        },
        {
          label: "Man erkennt dich, aber nicht, was du anbietest",
          points: 2,
          tip:
            "Ergänze eine klare Leistung: z. B. „Shootings, UGC, Events“ oder „Coaching online & vor Ort“. Ein Satz reicht, er muss nur konkret sein.",
        },
        {
          label: "Grundsätzlich verständlich, aber noch etwas vage",
          points: 3,
          tip:
            "Nenne deine Stadt oder Region und ein Stichwort zu deinem Stil (z. B. „clean beauty“, „streetwear“, „fitness“). Das hilft Agenturen beim schnellen Scan.",
        },
        {
          label: "Klar: Wer du bist, was du machst und für wen",
          points: 4,
          tip:
            "Bleib aktuell: Wenn sich dein Fokus ändert, passe die Bio an. Ein Link zur Website oder zum Portfolio in der Bio macht den nächsten Schritt einfacher.",
        },
      ],
    },
    {
      id: "profilbild",
      title: "Profilbild",
      prompt: "Zeigt dein Profilbild dein Gesicht gut erkennbar, mit gutem Licht?",
      options: [
        {
          label: "Unscharf, zu dunkel oder Gesicht kaum erkennbar",
          points: 1,
          tip:
            "Nimm ein neues Bild bei Tageslicht, Gesicht zentriert, ohne starke Filter. Castings und Kund:innen müssen dich auf einen Blick wiedererkennen.",
        },
        {
          label: "Erkennbar, aber schwieriges Licht oder ablenkender Hintergrund",
          points: 2,
          tip:
            "Wähle einen ruhigen Hintergrund und weiches Licht von vorne. Keine Sonnenbrille, kein Hut, der dein Gesicht verdeckt.",
        },
        {
          label: "Gut erkennbar, kleine Verbesserungen möglich",
          points: 3,
          tip:
            "Croppe so, dass dein Gesicht etwa zwei Drittel des Bildes füllt. Das wirkt auf dem Handy professioneller als ein winziges Gesicht in der Ferne.",
        },
        {
          label: "Klar, hell, professionell und wiedererkennbar",
          points: 4,
          tip:
            "Nutze dasselbe Profilbild auch auf anderen Kanälen, wenn du sie verlinkst. Einheitlichkeit wirkt seriös.",
        },
      ],
    },
    {
      id: "bilder",
      title: "Bildauswahl & Highlights",
      prompt: "Wirken Feed und Highlights konsistent, mit deinen stärksten Bildern vorne?",
      options: [
        {
          label: "Chaotischer Mix, keine klare Linie",
          points: 1,
          tip:
            "Sortiere deinen Feed neu: Lösche oder archiviere Bilder, die nicht zu deinem Ziel passen. Drei starke Reihen oben reichen für einen ersten professionellen Eindruck.",
        },
        {
          label: "Ein paar gute Shots, aber viel Füllmaterial dazwischen",
          points: 2,
          tip:
            "Pinne deine drei besten Posts oben oder nutze Highlights mit klaren Titeln (Portfolio, BTS, Presse). Keine leeren Highlight-Kreise.",
        },
        {
          label: "Überwiegend stimmig, Highlights könnten sortierter sein",
          points: 3,
          tip:
            "Ordne Highlights nach Nutzen: z. B. „Book me“, „Portfolio“, „Presse“, „Behind the Scenes“. Die wichtigste Kategorie zuerst.",
        },
        {
          label: "Konsistent, beste Arbeit sichtbar, Highlights sortiert",
          points: 4,
          tip:
            "Ersetze ältere Highlight-Cover regelmäßig, wenn du bessere Bilder hast. Dein Profil soll deinen aktuellen Level zeigen, nicht den von zwei Jahren.",
        },
      ],
    },
    {
      id: "kontakt",
      title: "Kontakt & Erreichbarkeit",
      prompt: "Finden Interessent:innen leicht einen Weg, dich zu erreichen oder zu buchen?",
      options: [
        {
          label: "Kein Kontaktweg in der Bio oder im Profil",
          points: 1,
          tip:
            "Füge eine E-Mail oder einen Link hinzu (Website, Linktree, Sedcard). Schreib daneben, wofür die Anfrage gedacht ist: Buchung, Kooperation, Casting.",
        },
        {
          label: "Nur DM – ohne Hinweis, ob du Anfragen annimmst",
          points: 2,
          tip:
            "Schreib in der Bio: „Anfragen per Mail an …“ oder „Kooperationen: Formular im Link“. Das filtert Spam und wirkt professioneller als „schreib mir einfach“.",
        },
        {
          label: "Kontakt vorhanden, Buchungsinfos fehlen noch",
          points: 3,
          tip:
            "Ergänze kurz Response-Zeit oder Art der Anfragen (z. B. „geschäftlich nur per E-Mail“). So wissen Agenturen, was sie erwarten können.",
        },
        {
          label: "Klarer Kontaktweg und Hinweise für Buchungen",
          points: 4,
          tip:
            "Prüfe monatlich, ob Links noch funktionieren und ob deine Mail im Postfach nicht im Spam landet. Ein toter Link kostet echte Chancen.",
        },
      ],
    },
    {
      id: "nische",
      title: "Nische & Richtung",
      prompt: "Ist erkennbar, in welche Richtung du gehst (Fashion, Beauty, Fitness, …)?",
      options: [
        {
          label: "Keine erkennbare Richtung",
          points: 1,
          tip:
            "Entscheide dich für eine Hauptnische für die nächsten 8 Wochen und poste vor allem dazu. Ein klarer Fokus hilft Algorithmus und Agenturen gleichermaßen.",
        },
        {
          label: "Mal so, mal so – schwer einzuordnen",
          points: 2,
          tip:
            "Wähle drei Content-Säulen (z. B. Outfits, BTS, Tipps) und halte sie im Verhältnis 70/20/10. So bleibt Abwechslung, ohne verwirrend zu wirken.",
        },
        {
          label: "Richtung erkennbar, aber noch nicht überall gleich",
          points: 3,
          tip:
            "Gleiche Stichworte in Bio, Highlights und Bildunterschriften (z. B. „Fitness“, „UGC Beauty“). Wiederholung macht deine Positionierung merkbar.",
        },
        {
          label: "Klare Nische, auch in Bio und Bildsprache",
          points: 4,
          tip:
            "Wenn du erweitern willst, teste neue Themen in Stories und behalte den Feed erstmal bei deiner Kernnische. So wächst du, ohne Vertrauen zu verlieren.",
        },
      ],
    },
  ];

  var state = {
    step: 0,
    answers: [],
  };

  var screens = {
    intro: document.getElementById("screen-intro"),
    question: document.getElementById("screen-question"),
    result: document.getElementById("screen-result"),
  };

  var els = {
    progressFill: document.getElementById("progress-fill"),
    progressLabel: document.getElementById("progress-label"),
    questionTitle: document.getElementById("question-title"),
    questionPrompt: document.getElementById("question-prompt"),
    options: document.getElementById("options"),
    btnNext: document.getElementById("btn-next"),
    btnBack: document.getElementById("btn-back"),
    btnStart: document.getElementById("btn-start"),
    btnRestart: document.getElementById("btn-restart"),
    scoreValue: document.getElementById("score-value"),
    verdict: document.getElementById("verdict"),
    tipsList: document.getElementById("tips-list"),
  };

  function showScreen(name) {
    Object.keys(screens).forEach(function (key) {
      screens[key].classList.toggle("is-active", key === name);
      screens[key].hidden = key !== name;
    });
    if (name === "question") {
      renderQuestion();
    }
  }

  function maxPoints() {
    return QUESTIONS.length * 4;
  }

  function updateProgress() {
    var qIndex = state.step - 1;
    var pct = Math.round((qIndex / QUESTIONS.length) * 100);
    els.progressFill.style.width = pct + "%";
    els.progressLabel.textContent =
      "Frage " + (qIndex + 1) + " von " + QUESTIONS.length;
  }

  function renderQuestion() {
    var q = QUESTIONS[state.step - 1];
    els.questionTitle.textContent = q.title;
    els.questionPrompt.textContent = q.prompt;
    els.options.innerHTML = "";

    var groupName = "q-" + q.id;
    var saved = state.answers[state.step - 1];

    q.options.forEach(function (opt, index) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option";
      btn.setAttribute("role", "radio");
      btn.setAttribute("aria-checked", saved === index ? "true" : "false");
      btn.dataset.index = String(index);
      btn.textContent = opt.label;
      btn.addEventListener("click", function () {
        selectOption(index);
      });
      els.options.appendChild(btn);
    });

    els.options.setAttribute("role", "radiogroup");
    els.options.setAttribute("aria-labelledby", "question-prompt");

    els.btnNext.disabled = saved === undefined;
    els.btnBack.hidden = state.step <= 1;
    els.btnNext.textContent =
      state.step >= QUESTIONS.length ? "Ergebnis anzeigen" : "Weiter";
    updateProgress();
  }

  function selectOption(index) {
    state.answers[state.step - 1] = index;
    var buttons = els.options.querySelectorAll(".option");
    buttons.forEach(function (btn, i) {
      btn.setAttribute("aria-checked", i === index ? "true" : "false");
    });
    els.btnNext.disabled = false;
  }

  function computeScore() {
    var sum = 0;
    QUESTIONS.forEach(function (q, qi) {
      var ai = state.answers[qi];
      sum += q.options[ai].points;
    });
    return Math.round((sum / maxPoints()) * 100);
  }

  function verdictFor(score) {
    if (score >= 85) {
      return "Stark aufgestellt. Dein Profil wirkt professionell und einladend.";
    }
    if (score >= 70) {
      return "Gute Basis. Mit ein paar gezielten Tweaks wirkst du noch klarer für Buchungen.";
    }
    if (score >= 50) {
      return "Solider Start, aber noch Luft nach oben. Die Tipps unten bringen den größten Effekt.";
    }
    if (score >= 35) {
      return "Dein Profil vermittelt noch nicht klar genug, wer du bist. Das lässt sich schnell verbessern.";
    }
    return "Hier lohnt sich ein Fokus-Update. Schritt für Schritt wird dein Auftritt deutlich professioneller.";
  }

  function pickTips() {
    var ranked = QUESTIONS.map(function (q, qi) {
      var ai = state.answers[qi];
      var points = q.options[ai].points;
      return {
        qi: qi,
        points: points,
        tip: q.options[ai].tip,
        title: q.title,
      };
    });

    ranked.sort(function (a, b) {
      if (a.points !== b.points) return a.points - b.points;
      return a.qi - b.qi;
    });

    var tips = [];
    var used = {};
    for (var i = 0; i < ranked.length && tips.length < 3; i++) {
      var item = ranked[i];
      if (used[item.qi]) continue;
      used[item.qi] = true;
      tips.push(item);
    }
    return tips;
  }

  function renderResult() {
    var score = computeScore();
    els.scoreValue.textContent = String(score);
    els.verdict.textContent = verdictFor(score);
    els.tipsList.innerHTML = "";
    pickTips().forEach(function (item) {
      var li = document.createElement("li");
      li.textContent = item.tip;
      els.tipsList.appendChild(li);
    });
    els.progressFill.style.width = "100%";
    els.progressLabel.textContent = "Fertig";
  }

  function goNext() {
    if (state.step === 0) {
      state.step = 1;
      showScreen("question");
      return;
    }
    if (state.step < QUESTIONS.length) {
      state.step += 1;
      renderQuestion();
      return;
    }
    renderResult();
    showScreen("result");
  }

  function goBack() {
    if (state.step <= 1) return;
    state.step -= 1;
    renderQuestion();
  }

  function restart() {
    state.step = 0;
    state.answers = [];
    els.progressFill.style.width = "0%";
    els.progressLabel.textContent = "";
    showScreen("intro");
  }

  els.btnStart.addEventListener("click", goNext);
  els.btnNext.addEventListener("click", goNext);
  els.btnBack.addEventListener("click", goBack);
  els.btnRestart.addEventListener("click", restart);

  showScreen("intro");
})();
