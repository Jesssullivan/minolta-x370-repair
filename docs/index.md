# Minolta X-370 — Shutter / Wind-Lever Repair Log

Repair log for a Minolta X-370 that presented with two symptoms at once:

- Shutter would not fire (button press did nothing)
- Film advance thumb lever would not complete its stroke electronically or mechanically, **unless the motor-drive coupling lever under the take-up spool (the "actuation spear") was manually turned/removed first**

The camera previously had a working motor winder (Auto Winder G-class accessory) attached.

## Confirmed root cause

The motor-drive coupling lever (the metastable overcenter/detent mechanism that lets the coupler shaft sit either "parked" for manual winding or "engaged" for motor winding) was **bent**, so it no longer seated cleanly in either position. That partially blocked the internal wind gear train, which — on this drivetrain (shared across the X-370/X-700/XG family) — mechanically prevents the shutter from being cocked and therefore from firing at all. One bent part, two symptoms.

See [Diagnosis](diagnosis.md) for the full hypothesis ranking that led here.

## Repair plan

1. Source a cheap parts/non-working X-370 body for a donor coupler lever assembly — [Parts Sourcing](parts-sourcing.md)
2. Swap in the donor coupler lever, verify full wind-lever stroke and shutter release restored
3. While the base plate is off: verify the storage capacitor and release-magnet with a DMM/scope, and replace C7 if it fails — [Bench Testing](bench-testing.md) for the test procedure, [Capacitor & Tools](capacitor-and-tools.md) for the replacement part and the soldering tools to do it with
4. Replace the focusing screen if needed — [Focusing Screen](focusing-screen-replacement.md)
5. Replace the eyecup (EH-7) — see [Parts Sourcing](parts-sourcing.md)

All external sources cited throughout are collected in [Bibliography](bibliography.md).

## Status

- [x] Root cause identified (bent motor-drive coupler lever)
- [ ] Donor parts body sourced
- [ ] Coupler lever swapped
- [ ] Capacitor/magnet bench-verified
- [ ] Capacitor (C7) replaced, if bench test fails
- [ ] Focusing screen replaced
- [ ] Eyecup replaced
- [ ] Camera confirmed functional with a test roll

---

*This site is generated from the same markdown in [github.com/Jesssullivan/minolta-x370-repair](https://github.com/Jesssullivan/minolta-x370-repair) — edit the docs there, the site rebuilds on push.*
