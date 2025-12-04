# Täglicher Arbeitsbericht - Minerva Biolabs

Ein modernes Web-Tool zur Erstellung und Verwaltung täglicher Arbeitsberichte für Laborprojekte.

## 📁 Dateien

- **`outlook_tagesbericht.html`** - Finale Berichtsansicht mit aktuellen Produktdaten
- **`data-editor.html`** - Interaktiver Editor zum Bearbeiten der Projektdaten
- **`code.html`** - Original Design-Vorlage
- **`config.js`** - Beispiel-Konfigurationsdatei für Produktdaten

## 🚀 Verwendung

### 1. Tagesbericht anzeigen
Öffne `outlook_tagesbericht.html` im Browser für die finale Berichtsansicht.

### 2. Daten bearbeiten
Öffne `data-editor.html` im Browser:
- **✏️ Bearbeiten** - Schalte in den Edit-Modus
- **👁️ Vorschau** - Sieh die finale Ansicht
- **💾 Export** - Lade die Konfiguration herunter

### 3. Daten aktualisieren
**Option A:** Direkt im Editor
- Klicke "Bearbeiten" und ändere Werte inline
- Füge/lösche Aufgaben und Produkte
- Status: `completed`, `in-progress`, `pending`

**Option B:** Konfigurationsdatei bearbeiten
- Bearbeite das `productData` Objekt in der HTML-Datei
- Automatische Prozentberechnung basierend auf abgeschlossenen Aufgaben

## 🎨 Features

- **Modernes Tailwind CSS Design**
- **Material Icons** für Status-Anzeigen
- **Automatische Fortschrittsberechnung**
- **Responsive Design** für alle Geräte
- **Dark Mode Support**
- **Live-Vorschau** im Editor
- **Export-Funktion** für Konfigurationen

## 📊 Datenstruktur

```javascript
const productData = {
    products: [
        {
            name: "Produktname",
            icon: "🔬",
            eta: "Datum/Status",
            tasks: [
                {
                    title: "Aufgabe",
                    description: "Beschreibung",
                    status: "completed|in-progress|pending"
                }
            ]
        }
    ]
};
```

## 🔧 Anpassung

- **Farben:** Ändere die Tailwind-Konfiguration
- **Logo:** Ersetze die Bild-URL im Header
- **Firmenname:** Ändere "Minerva Biolabs" in den HTML-Dateien
- **Icons:** Verwende beliebige Emojis oder Material Icons

## 💡 Tipps

- Fortschritt wird automatisch berechnet: (Abgeschlossene Aufgaben / Gesamt) × 100%
- Verwende aussagekräftige Emojis für Produkticons
- Der Editor zeigt sofort die finale Ansicht in der Vorschau
- Exportiere regelmäßig deine Konfiguration als Backup

---
© 2023 Minerva Biolabs GmbH