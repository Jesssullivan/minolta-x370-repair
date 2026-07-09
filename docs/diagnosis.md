# Diagnosis

## Symptoms observed

- Shutter button/release did not actuate the shutter
- Film advance thumb lever would not complete its stroke, electronically or mechanically, without first manually turning/removing the motor-drive coupling lever under the take-up spool
- New batteries installed, no change
- Main storage capacitor **visually** appeared undamaged (no bulge/leakage)
- A motor winder had previously been attached and was believed to be functioning

## Working theory

On the X-370's drivetrain (shared with the X-700/XG family), the shutter cannot release unless the wind mechanism completes a full stroke — winding and shutter-charging are mechanically interlocked. A block in the wind train presents as a "dead" shutter even if the release circuit is completely healthy. Two symptoms, one likely cause.

## Hypotheses, ranked at time of initial triage

| Rank | Suspect | Likelihood | Status |
|---|---|---|---|
| 1 | Motor-drive coupler lever stuck/bent, blocking the wind gear train | High | **Confirmed** — coupler lever found bent |
| 2 | Main storage capacitor (C7 on X-300/X-370) degraded despite looking fine | High | Pending bench verification, see `bench-testing.md` |
| 3 | Shutter release electromagnet fouled with oil | Medium | Not yet checked |
| 4 | Battery contact corrosion / voltage sag under load | Rule-out | Ruled out — built-in meter readout (A/M) was stable under load |

## Confirmed finding

The motor-drive coupling lever — the metastable over-center mechanism that lets the coupler shaft park for manual winding or engage for motor-drive winding — was **bent**. It was not seating cleanly in either detent position, partially jamming the internal wind gear train. This matches the documented failure mode on this chassis family where the coupler must be manually nudged (quarter-turned) to free the wind lever after motor-drive use; here the lever itself was physically deformed rather than just mis-indexed.

Repair plan: source a donor coupler-lever assembly from a parts body (see `parts-sourcing.md`) rather than attempt to bend the original back to spec and risk further metal fatigue/cracking on a 40+ year old part.

## Still to verify

Even after the mechanical fix, bench-verify the capacitor and release magnet while the base plate is already off — a bent coupler does not rule out a second, independent weak capacitor on a camera this age. See `bench-testing.md` for the DMM/scope procedure.
