// Tägliche Produktdaten - Hier einfach die Werte ändern
const productData = {
    reportDate: new Date().toLocaleDateString('de-DE', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    }),
    products: [
        {
            name: "Venor Mycoplasma",
            icon: "🔬",
            eta: "Morgen",
            progress: 80,
            tasks: [
                { title: "Mix gelabelt", description: "Labeling abgeschlossen", status: "completed" },
                { title: "Wasser gelabelt", description: "Wasserkontrolle vorbereitet", status: "completed" },
                { title: "Qualitätskontrolle", description: "Finale Tests ausstehend", status: "pending" }
            ]
        },
        {
            name: "Qiagen E.coli resDNA",
            icon: "🧬",
            eta: "Warten auf Mix",
            progress: 50,
            tasks: [
                { title: "IK fertig", description: "Interne Kontrolle abgeschlossen", status: "completed" },
                { title: "Mix Bereitstellung", description: "Warten auf Lieferung", status: "in-progress" },
                { title: "Finale Assemblierung", description: "Nach Mix-Erhalt", status: "pending" }
            ]
        }
        // Weitere Produkte hier hinzufügen...
    ]
};

// Status-Optionen: "completed", "in-progress", "pending"
// Progress: 0-100 (Prozent)
// Icons: Beliebige Emojis (🔬, 🧬, ⚡, 📊, 🧪, 💡)