# Capacitor Replacement Parts and Tools

**Same caveat as `parts-sourcing.md`: these are point-in-time snapshots, not a live feed.** Prices/stock at distributors move constantly (Mouser/DigiKey less so than eBay/Amazon, but still verify before ordering). Dated per line below.

## Replacement capacitor for C7 (220µF, originally ~4V)

Original spec is a 220µF 4V (sometimes documented as 200µF 4V) radial electrolytic. **4V-rated parts are essentially unstocked at modern distributors** — the standard move in the repair community is to go up in voltage rating (6.3V or even 16V is fine on a 3V circuit; higher voltage rating never hurts, it just usually means a physically bigger can). Match capacitance and keep the can small enough to clear the base-plate cavity; voltage headroom is free insurance, not a problem.

### Confirmed via live DigiKey fetch — 2026-07-08

**Nichicon UVR1C221MED1TA** — 220µF, 16V, radial leaded (through-hole), 6.3mm diameter × 12.5mm height can, ±20% tolerance.
- **$0.33/unit**, 1,571–11,743 units in stock at check time.
- <https://www.digikey.com/en/products/detail/nichicon/UVR1C221MED/588782>
- Note: the original UVR1C221MED part number itself shows Obsolete/0 stock on that page — DigiKey auto-suggests the `1TA`/`1TD` suffix variants above as the current in-production replacement. Order the suffixed part, not the bare part number.
- This is a generic-purpose 2,000-hour/85°C can, not a premium long-life part — fine for a hobbyist camera that gets occasional use, not necessarily what you'd pick for a device that runs 24/7.

### Closer voltage match, not live-price-confirmed (fetch blocked by Mouser)

**Panasonic EEE-FT0J221AR** — FT series, 220µF, **6.3V** (closer to the original 4V spec than the Nichicon above), low-ESR/long-life radial leaded part designed for exactly this kind of low-voltage timing/release circuit.
- <https://www.mouser.com/ProductDetail/Panasonic/EEE-FT0J221AR>
- Couldn't pull live price/stock via automated fetch (Mouser blocked it) — check the listing directly. Low-ESR FT series is generally a better electrical match for a release-magnet driver than a generic-purpose can, if price/stock are comparable to the Nichicon above.

### Amazon — assortment kits, not single parts

A single loose 220µF/4-6V through-hole cap isn't commonly sold standalone on Amazon; it shows up inside general electrolytic assortment kits (0.1µF–1000µF range, rated 10/16/25/50V):

- 210pc 25-value kit (0.1–220µF): <https://www.amazon.com/210Pcs-0-1uF-220uF-Electrolytic-Capacitors-Assortment/dp/B016UYRB2O>
- uxcell 220µF/10V radial, 5×7mm, 30-pack (single-value, not a mixed kit — closest thing to a direct buy on Amazon): <https://www.amazon.com/uxcell-220uF-Radial-Electrolytic-Capacitor/dp/B016EKARN4>
- 500pc 24-value kit (0.1–1000µF): <https://www.amazon.com/Electrolytic-Capacitor-Assortment-0-1uF-1000uF-Capacitors/dp/B08ZHKLW1M>

Useful mainly as bench stock for future repairs on this camera family, not the fastest way to get exactly one cap today.

### AliExpress — closest voltage match, but check through-hole vs SMD

- **220µF 4V NICHICON, 6.3×5.4mm, SMD chip-type**, 10pcs — closest voltage match found anywhere in this search, **but it's a surface-mount chip part, not the through-hole radial-leaded part the camera uses.** Would need pad adaptation, not a drop-in. <https://www.aliexpress.com/item/32845582668.html>
- Assorted-voltage SMD electrolytic 10-packs spanning 4V–100V incl. 220µF also turn up cheaply, same SMD caveat applies: <https://www.aliexpress.com/item/1005002638851000.html>
- General AliExpress search for through-hole "220uf 4v capacitor": <https://www.aliexpress.com/w/wholesale-220uf-4v-capacitor.html>
- Main reason to bother with AliExpress here: it's the only source above actually stocking the original 4V rating. Main reason not to: multi-week shipping from China, and most listings found are SMD, not through-hole. Order now only if you want it as backup stock and don't need the camera running this week.

**Bottom line recommendation:** order the DigiKey Nichicon `UVR1C221MED1TA` for the actual repair (in stock, through-hole, cheap, arrives fast) and treat the AliExpress SMD parts / Amazon kits as spares-drawer stock, not the primary fix.

## Tools

### Soldering iron

- **Hakko FX888D-23BY** — the de facto standard hobbyist/repair-bench digital iron, widely recommended specifically for this class of small-board work. <https://www.amazon.com/Hakko-FX888D-23BY-Digital-Soldering-Station/dp/B00ANZRT4M>
- **Pinecil V2** — budget smart alternative, USB-C powered, fast heat-up, good temperature control, no bulky station needed. <https://www.amazon.com/PINECIL-Smart-Mini-Portable-Soldering/dp/B096X6SG13>
- **Weller WLC100** — cheaper analog option if you don't want a digital station; workable but less precise temperature control than the two above.
- Whatever iron you use: run it around **315–350°C (600–660°F)** for leaded 63/37 solder on this kind of small through-hole pad, and use the finest conical tip you have — these pads and the flex circuit around them are small and heat-sensitive.

### Solder

- **Kester 44, 63/37, rosin core, 0.031" diameter** — standard fine-gauge choice for small through-hole work like this. <https://www.amazon.com/Kester-Rosin-Core-Solder-Dispense-Pak/dp/B00AVLM4SO>
- 63/37 (eutectic) over 60/40 here specifically because it transitions from liquid to solid almost instantly with no plastic/mushy phase — less chance of a cold joint if the board moves slightly while cooling, which matters more on a hand-held flex circuit than on a vise-held board.

### Desoldering braid (to pull the old C7 out cleanly)

- **MG Chemicals 424-NS, #2 fine braid, 0.05" width** — narrower braid, better suited to small through-hole pads than a wide braid that'll bridge adjacent pads. <https://www.amazon.com/MG-Chemicals-Desoldering-Braid-Clean/dp/B01MT4J613>
- **Chemtronics 60-3-5, No-Clean Soder-Wick** — equivalent alternative, no-clean flux means no mandatory alcohol cleanup after. <https://www.amazon.com/Chemtronics-60-3-5-Soder-Wick-Clean-Desoldering/dp/B00R3PMTLI>

### Cleanup

- 99% isopropyl alcohol + a small flux brush for post-solder cleanup, particularly if using rosin (not no-clean) braid or solder — standard hardware/pharmacy item, no specific product link needed.

## Sequencing note

Base plate is already open for the coupler-lever swap (see `README.md` repair plan) — do the capacitor bench-test (`bench-testing.md`) and, if it fails, the swap in the same session rather than closing the camera back up and reopening it.
