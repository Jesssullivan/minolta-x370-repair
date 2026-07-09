# Bench Testing — DMM and Analog Oscilloscope

What's worth checking with a basic multimeter and an older (non-digital-storage) Tektronix lab scope, now that the base plate is off for the coupler-lever swap. Two different tools for two different jobs here — know which one can actually see what before you start.

## Why the scope and the DMM aren't interchangeable for this

- A basic DMM samples roughly 2–4 times a second. The shutter-release event is a **one-shot transient lasting well under a second**. A basic DMM physically cannot resolve that transient — it's fine for static resistance/continuity/open-circuit voltage, but it will not show you a capacitor sagging under load during a release pulse.
- An **older analog Tektronix scope without storage/single-sweep capture** has the same problem from the other direction: it redraws the trace only while it's actively sweeping, so a one-time button press produces, at best, a flash across the screen with nothing left to look at afterward.
  - Check whether your scope has **single-sweep mode + long-persistence phosphor**, or is a **storage scope** (e.g. Tek 5223, 7623, or dual-trace storage models) — if so, arm a single sweep, press the shutter release, and the trace will hold on screen (or in digital storage) afterward.
  - If it's a plain non-storage scope (e.g. 2213, 2215, 465-class), you have two options: (a) photograph the CRT during a single sweep the moment you trip the shutter, old-school scope-camera style, or (b) skip the transient capture and use the scope only for the tests below that don't require catching a one-shot event.

## 1. Battery contacts under load (DMM)

- DMM in DC volts mode, probes on the battery contacts (not the loose cells).
- Half-press the shutter button to wake the meter circuit and hold.
- Expect **≥ 2.7V** for two SR44/LR44 cells in series while loaded. A reading that's fine at rest but collapses under this load points at corroded/high-resistance contacts, not the cells.

## 2. Release switch continuity (DMM)

- DMM in continuity/beep mode across the shutter-button switch leads.
- Work the button through its full travel slowly. Expect a **clean, single transition** from open to a hard short exactly at full press — no intermittent beeping/bounce partway through the stroke. Bounce or a dead zone means the switch contacts need cleaning, not the release circuit.

## 3. Release electromagnet coil (DMM)

- DMM in resistance mode, across the two magnet coil leads (base plate already off for the coupler work, so this is easy access).
- Expect a **coherent low-value reading** typical of a small release solenoid of this size — we couldn't source a factory-spec ohm figure for this exact coil, so judge by "a stable, sane resistance value" rather than a specific number. `OL` (open) means a broken winding; near-zero/dead short means a shorted winding. Either is a hard fail requiring replacement, not cleaning.

## 4. Storage capacitor — C7 on the X-300/X-370 (DMM + scope)

This is the single best-documented failure point on this camera generation. The service-manual designator on X-300/X-370 is **C7** (X-700 has two, C8/C9, driving its second mirror-release magnet — the X-370 only has the one shutter-release magnet, hence one cap).

**Why a no-load test can lie to you:** repair-forum reports specifically describe this capacitor testing fine on a bench capacitance/ESR meter with no load applied, while still failing to hold the rail during the brief current pulse the release circuit actually demands. A pass here is not a clean bill of health.

- **DMM-only check (weak but better than nothing):** out of circuit, briefly charge the cap through a resistor and watch open-circuit voltage decay on the DMM. A cap that won't hold charge for more than a second or two is bad. This will still miss an ESR-only failure — treat a pass as inconclusive.
- **Scope check (the real test, needs single-sweep/storage per above):** clip the scope probe across the cap's leads *in-circuit*, set DC coupling, a sensitive vertical scale (this is a 3V-class rail — use the 1x probe setting, not 10x, for headroom at these low voltages), arm a single sweep, and trip the shutter release. A healthy cap holds a flat rail through the pulse; a degraded one shows a visible sag or collapse right as the magnet should be releasing.
- Given the part is roughly a dollar and is a documented weak point at this camera's age, most techs replace C7 outright rather than chase an ambiguous test result once the base plate is already open. **Note polarity before desoldering** — reversed electrolytics on this circuit are a documented cause of instant re-failure.

## Still missing

We could not pull an exact factory pin-out (SW1/SW2 designators) or a specific coil-resistance spec from a source we could verify by fetching the page directly (site blocked automated access). If it comes to needing exact values, the Elektrotanya or USCamera X-300/X-370 factory service manual has the wiring diagram — see `bibliography.md`.
