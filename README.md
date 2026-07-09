# Minolta X-370 — Shutter / Wind-Lever Repair Log

Repair log for a Minolta X-370 that presented with two symptoms at once:

- Shutter would not fire (button press did nothing)
- Film advance thumb lever would not complete its stroke electronically or mechanically, **unless the motor-drive coupling lever under the take-up spool (the "actuation spear") was manually turned/removed first**

The camera previously had a working motor winder (Auto Winder G-class accessory) attached.

## Confirmed root cause

The motor-drive coupling lever (the metastable overcenter/detent mechanism that lets the coupler shaft sit either "parked" for manual winding or "engaged" for motor winding) was **bent**, so it no longer seated cleanly in either position. That partially blocked the internal wind gear train, which — on this drivetrain (shared across the X-370/X-700/XG family) — mechanically prevents the shutter from being cocked and therefore from firing at all. One bent part, two symptoms.

See [`docs/diagnosis.md`](docs/diagnosis.md) for the full hypothesis ranking that led here.

## Repair plan

1. Source a cheap parts/non-working X-370 body for a donor coupler lever assembly — [`docs/parts-sourcing.md`](docs/parts-sourcing.md)
2. Swap in the donor coupler lever, verify full wind-lever stroke and shutter release restored
3. While the base plate is off: verify the storage capacitor and release-magnet with a DMM/scope — [`docs/bench-testing.md`](docs/bench-testing.md)
4. Replace the focusing screen if needed — [`docs/focusing-screen-replacement.md`](docs/focusing-screen-replacement.md)
5. Replace the eyecup (EH-7) — see parts sourcing doc

All external sources cited throughout are collected in [`docs/bibliography.md`](docs/bibliography.md).

## Status

- [x] Root cause identified (bent motor-drive coupler lever)
- [ ] Donor parts body sourced
- [ ] Coupler lever swapped
- [ ] Capacitor/magnet bench-verified
- [ ] Focusing screen replaced
- [ ] Eyecup replaced
- [ ] Camera confirmed functional with a test roll
