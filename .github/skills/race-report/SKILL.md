---
name: race-report
description: 'Create, draft, or update Slovak SPEN and HES race reports in this bike journal. Use for new race pages, personal result summaries, race PDF links, stage notes, photo galleries, and aftermovies. Follow the existing 2025 report structure rather than designing a new landing page.'
---

# Race Reports

## Scope

Create static HTML race reports in this workspace, using the 2025 reports as
the visual and editorial basis. Keep changes to the requested reports, their
season-table links and result summaries, and any strictly necessary scoped styles.

## Establish the Facts

1. Read the race entry in `index.html` and inspect `data/YEAR/EVENT/`.
   Confirm date, venue, series, available result PDFs, maps, photos, and videos.
2. Read an appropriate 2025 report before editing:
   - `2025_spen4_drozdovo.html`: completed race, personal results, RS-by-RS
     narrative, gallery, result screenshot, and aftermovie.
   - `2025_spen1_kalnica.html` and `2025_spen2_kosutka.html`: completed races
     with stage-time comparisons.
   - `2025_spen3_bojnice.html`: training only, no personal finish result.
   - `2025_spen5_partizanske.html`: unfinished event with narrative and media.
3. Use supplied notes for the author's experience. If extracting personal
   results from PDFs, confirm the rider's identity and category first. Verify
   total time, category and overall ranks, field sizes, and stage splits.
   Never infer participation or a finish from the presence of result links.
   When generating or updating a race report, automatically extract the rider's
   results from any relevant PDF already available locally or downloaded with
   approval using the procedure below. Do not wait for a separate extraction
   request or leave extractable results as placeholders. Update both the race
   report and its `index.html` summary with the verified data.
   Preserve published precision and stage numbering, including missing stages;
   do not replace the official total with a sum of rounded splits. Omit overall
   placing unless published or verified by calculating it across the complete
   relevant field, with explicit treatment of non-finishers and ties.
   When generating a report, offer to verify overall placing and the finisher
   count on SportSoft using the approval-gated procedure below.
4. Do not invent times, places, weather, trail descriptions, stage counts,
   injuries, quotes, or media URLs. Do not infer the HES round number from the
   SPEN round number. Use explicit `doplniť` placeholders for unknown draft
   fields; distinguish a draft from a completed report.

## Verify Overall Results on SportSoft

1. Obtain explicit user approval for this task before opening or fetching web
   results. Ask whether to look up overall placing and the finisher count on
   SportSoft unless the user has already explicitly authorized that lookup.
   A request to generate a page, this skill, or approval in a previous task is
   not web-access permission. If approval is declined or absent, continue with
   local evidence and leave unverified overall results out.
2. After approval, open https://vysledky.sportsoft.cz/ in the shared browser.
   Search by venue or event name and confirm the date and year before opening
   the race. The correct site is not sportsofttiming.cz.
3. Select the rider's competition: normally **Enduro Challenge** for hobby
   results, not SPEN, Enduro Challenge - Žiaci, or Enduro Challenge - E-Bike.
   Confirm **Overall Results** is selected, not Gender Results or Category
   Results, and leave the intermediate/stage selector unset for total results.
4. Locate **HRMO Vladimír** and cross-check the bib, birth year, category, and
   total time against the local PDF. Read overall placing from the **Pos**
   column, not the Gender or Cat. columns. Respect the site's official rank
   rather than deriving it from a row index.
5. Count classified finishers across every results page. Clear name, bib,
   club, or other filters before counting the full competition. The table's
   entry count includes non-finishers: exclude DNF, DNS, and disqualified
   entries. Cross-check the final classified rows and status counts; do not
   assume the highest rank equals the finisher count when ties exist. Keep
   valid slow finishers in this count even if excluded from the time range.
6. Record the competition URL, rider's overall rank, finisher count, and
   excluded status counts in the work summary. Add the verified overall result
   to both the report and index summary, following the existing wording:
   `72. miesto z 87 celkovo Enduro Challenge`. Preserve PDF time precision if
   the website displays fewer decimal places; investigate substantive conflicts.
7. Verified example, not a default for other races: Donovaly, 13 September 2026,
   https://vysledky.sportsoft.cz/race/954/competition/6486 showed HRMO Vladimír,
   bib 136, **72nd of 87 finishers**. There were 96 entries: 87 classified,
   4 DNF, and 5 DNS. Results were paginated, so the first 50 rows were incomplete.

## Obtain and Extract Result PDFs

1. Check `data/YEAR/EVENT/` first and reuse existing result PDFs. Local
   extraction requires no additional web or download approval.
2. During an approved SportSoft lookup, ask explicitly whether to download
   the result PDF too, unless the user has already approved that download for
   this task. Permission to view web results alone is not download permission.
   If the PDF already exists, reuse it; ask before replacing it with a new copy.
3. After download approval, select the correct race and competition and click
   **Výsledková listina** under **Official Results**. Use that link's actual
   PDF URL, not a guessed filename. Confirm the event, date, and competition,
   then save the PDF under `data/YEAR/EVENT/` with its original filename.
   Download only the approved competition PDFs and preserve existing files.
4. Automatically extract data from the existing or newly downloaded PDF as
   part of report generation. Use a local PDF text extractor (for example,
   `pdftotext` or macOS PDFKit); inspect the rendered PDF if column order or
   text extraction is ambiguous. Verify the rider and category, total time,
   category placing and field size, stage labels and splits, and the time range
   using the procedure below. Obtain missing overall results through the
   separately approved SportSoft workflow rather than guessing.
5. Populate verified results in the report and synchronize the index summary;
   link the saved PDF with the established `race` or `hobby` label. If a
   download is declined or fails, still extract any available local PDF. If
   no usable PDF exists or a field cannot be verified, report the limitation
   and keep only that missing information unresolved, without inventing data.

## Determine the Time Range

- Use the relevant race field on the same course (for example, all hobby
   categories, not just Muži 40+); do not mix race and hobby results or different
   stage sets. Sort valid finishers by their published total times, excluding
   DNS, DNF, and disqualified entries.
- The range starts at the best time and ends at the last meaningful slow time,
   not necessarily the absolute slowest finish. Inspect gaps between consecutive
   finishers near the slow end against the surrounding gaps. Exclude the final
   rider or small trailing group only when a conspicuously large gap separates
   them from the rest of the field. Do not automatically discard a fixed number
   of riders or remove ordinary slower finishes.
- Such outliers may reflect a disrupted race, but a time gap alone does not
   establish an accident or mechanical problem. Do not invent a cause.
- If there is no clear outlier gap, use the slowest valid finish. If the cutoff
   is ambiguous, present the candidate times and gaps to the user for a decision.
   State any exclusions and the chosen cutoff in the work summary for review.
- Apply exclusions only to this descriptive range, never to official placings
   or field sizes. Preserve the published precision of both endpoints.

## Build the Page

### Current layout: hero / editorial dark theme (`body.race-hero`)

Use this layout for new completed race reports. All styling lives in
`assets/site.css` scoped under `body.race-hero`; do not add inline `style`
attributes or per-page `<style>` blocks. Reference implementation:
`2025_spen4_drozdovo.html`.

Page skeleton, in order:

1. `<head>`: `lang="sk"`, UTF-8, responsive viewport, `no-referrer`,
   `assets/site.css`, and `assets/unitegallery/css/unite-gallery.css` when the
   page has a gallery. No Materialize. Load the gallery scripts (jQuery,
   `unitegallery.min.js`, the tiles theme, `assets/page-init.js`) before
   `</body>`.
2. `<body class="race-hero">`.
3. `header.hero` with the race photo as a real element
   `<img class="hero-bg" src="..." alt="">` (per-page data, no inline styles;
   the gradient overlay comes from CSS). Inside `.hero-inner > .wrap`: a
   `.kicker` (series + round), `h1` title, `.meta` (venue · date · competition),
   and `.badges` (`.badge.series` for SPEN/HES, plain `.badge` for category and
   other facts). Do not add a standalone "Späť na sezónu" / back link.
   Prefer a landscape action photo where the rider is roughly centred with
   headroom above and clearance below; portrait images can only show a slice of
   the rider in the wide hero band. Because `.hero-bg` uses `object-fit: cover`,
   bias the crop with a per-page CSS variable in the page's `<style>` block,
   e.g. `body.race-hero { --hero-pos: 50% 22%; }` (the shared rule reads
   `object-position: var(--hero-pos, 50% 50%)`), and add a mobile override in a
   `@media (max-width: 520px)` block when the phone crop needs a different X/Y.
   `object-position` only pans the axis the image overflows, so a landscape photo
   in a portrait phone viewport ignores the `--hero-pos` Y; to reframe vertically
   there, zoom in with `--hero-zoom` (>1) and choose the focal point with
   `--hero-focus` (transform-origin, e.g. `20% 100%` pushes the top off-screen).
   Leave fine positioning to a human: set a sensible draft `--hero-pos`, render
   the page once at a wide and a narrow width, and report the chosen values and
   any head/bike-clipping trade-off for the human to fine-tune. Do not iterate
   pixel-by-pixel or spend excessive effort/tokens chasing a perfect crop. Do
   not stretch or letterbox the image and do not substitute an unrelated photo.
4. Stat strip: `.wrap > .stats` with four `.stat` cards. The first is
   `.stat.big` and shows the rider's total time in `.n` with the descriptive
   time range below it in `.range` (`best <small>–</small> last`). The other
   three show category placing, overall placing, and stage count, each with a
   `.l` label. Use the time-range and placing procedures above; keep published
   precision. Omit the range only when full results are unavailable.
5. `main > section.wrap.report-narrative > .grid2`:
   - `.prose` on the left with the Slovak first-person narrative. Mark stage
     notes with `<span class="highlight">RS1</span>` (or `.rs`); both render as
     accent text. Do not repeat the total time or a `Komplet výsledky` line here.
   - `aside` on the right with `.card` blocks: a `Časy na RS` `table.rs-table`
     (`td.tag` + `td.t`), an `Odkazy` `.linklist`, and a `Mapa trate` `.card`
     with the map image. In `Odkazy`, order the links report/invitation first
     (e.g. `Reportáž na biker.sk` / `Pozvánka na biker.sk`) and the result PDFs
     last (`Kompletné výsledky — Race (PDF)` then `Hobby (PDF)`); all links open
     in a new tab (`target="_blank" rel="noopener"`).
     When prior-year splits or year-over-year comparisons exist, never drop or
     compress them into one unreadable cell: render them as their own columns in
     a `table.rs-table.cols`. Give the times table a `thead` of year labels and
     each row a `td.tag`, a bold current-year `td.t`, and muted `td.prev` cells
     for earlier years (`—` when a split is missing). Show differences to each
     prior year in separate `vs YEAR` columns using `td.t.faster` (green, quicker)
     and `td.t.slower` (orange, slower); keep any lone stray datapoint in a small
     `.rs-note` under the table. Preserve published precision and do not reduce
     available historical information when restyling.
6. Media sections, each `section.wrap` with an `.eyebrow` + `h2`, only when real
   assets exist:
   - Gallery: `<div id="gallery" class="gallery">` with the race photos as
     `<img data-src="..." src="...">`, initialized as an interactive UniteGallery
     (justified tiles + lightbox) by `page-init.js`. Put the map in the sidebar,
     not the gallery.
   - Result screenshot: `img.result-shot` under an accurate category heading,
     wrapped in `a.result-shot-link` targeting a sibling `a.lightbox` (CSS
     `:target` popup) so clicking enlarges the image without any JS library.
   - Aftermovie: `.video-container > iframe` with a descriptive title and
     fullscreen support. Include `referrerpolicy="strict-origin-when-cross-origin"`
     so the YouTube embed works despite the page's `no-referrer` meta.
7. Close with `footer.race-footer` containing the race title.

Do not invent facts or substitute unrelated media; the editorial rules below
still apply. The numbered steps that follow describe the legacy Materialize
layout retained on older pages — do not restyle those pages globally.

### Legacy layout (existing Materialize pages)

1. Name the file `YEAR_spenN_venue.html`, with a lowercase ASCII venue slug.
   Reuse the existing event directory and exact asset filenames.
2. Use `lang="sk"`, UTF-8, a responsive viewport, local
   `assets/materialize1.0.0.css`, and `assets/site.css`. Preserve Slovak accents.
   Do not import the homepage's Tailwind design into reports.
3. Put the race title in both `<title>` and the centered navbar link:
   `nav._navbar > a.brand-logo.center`. Link back to `index.html#year-YEAR`.
   Do not add a separate "Späť na sezónu YEAR" link in the report body or
   footer; the navbar title provides the return navigation.
   New reports can use `body.race-report` for the existing scoped navbar and
   preformatted-result wrapping rules. Do not restyle older pages globally.
4. For a completed race, begin with the established personal result layout:
   `.valign-wrapper > .row`, a centered `h4` labelled `Výsledok`, a `.divider`,
   and `blockquote > pre`. Include verified total time and a `Časy: best - last
   meaningful slow time` line using the time-range procedure above whenever
   full results are available. Do not silently omit the range. Include
   category placing and field size, overall placing and field size, and RS
   splits. A draft may explicitly mark missing fields `doplniť`; omit the
   finish block for a known non-start or unfinished event.
5. Put the narrative in `.container > .row > .col.s12.m12.l12.xl10.offset-xl1`.
   Start with a `.divider` and a paragraph containing
   `<span class="date">D.M.YYYY</span> - ...` for race day.
6. Write in Slovak, in the author's direct first-person journal style when
   personal notes exist: expectations and preparation, training, race-day
   experience, notable RS sections, and a short reflection. Use
   `<span class="highlight">RS1</span>` for supplied stage notes. Do not
   manufacture a first-person account from calendar metadata.
7. End the narrative with `Komplet výsledky:` and the actual PDF links labelled
   `race` and `hobby` in both the report and index summary. Use `hobby`, not
   `HES`, for the result-link label even when the PDF filename contains `hes`;
   keep HES series badges unchanged. Preserve filenames even
   when they contain spelling mistakes. Add external reports or invitations
   only when the URLs and event match are verified.
8. Add optional media below the narrative, only when real assets exist:
   - Maps and photos in `.container > .row > .col.s12 > #gallery.gallery`;
     maps first, then personal and other verified race photos with useful alt text.
   - Result screenshots under `Výsledkové listiny`, using
     `img.materialboxed.responsive-img` and an accurate category heading.
   - An `Aftermovie` heading and `.video-container` with a verified YouTube
     embed, descriptive iframe title, and fullscreen support.
   - Do not substitute a season poster, stock imagery, empty gallery, dummy
     video, or unrelated older race assets for missing race media.
9. For galleries, load UniteGallery CSS, jQuery, UniteGallery core,
   `assets/unitegallery/themes/tiles/ug-theme-tiles.js`, and then
   `assets/page-init.js`. Load Materialize JS before the initializer when
   using materialboxed images. The shared initializer configures `.gallery`
   as justified tiles; do not duplicate its initialization. Plain text/PDF
   drafts need no gallery libraries or scripts. Do not copy unused video skins.
10. Retain the existing `footer.page-footer`. Link the race name in the
   matching season row of `index.html` to the report. When adding or correcting
   results, synchronize its result cell with the report: total time, the same
   time range in parentheses after it, category
   placing and field size, and overall placing only when verified. Keep stage
   splits in the report. Preserve existing PDF links, user-written notes,
   dates, badges, and shared table/grid behavior.

## Verify

- Check editor diagnostics and that every local href/src target exists.
- For downloaded PDFs, verify they open as PDFs and match the approved event
   and competition. Confirm available PDF results were extracted into the
   report and index summary rather than left as avoidable placeholders.
- Render both desktop and narrow mobile widths (320-390px). Check the full
  navbar title, result block wrapping, narrative width, and horizontal overflow.
- On hero pages, render the draft once at a wide and a narrow width and report
  the `--hero-pos` values (and any head/bike-clipping trade-off) so a human can
  fine-tune the crop; do not perfect it yourself. Confirm the `Odkazy` links are
  ordered report/invitation first and result PDFs last, and that any prior-year
  splits and diffs survive as readable columns, not dropped data.
- Verify the season-table link, navbar title link, and all result PDF links.
   Confirm there is no standalone "Späť na sezónu" link in the body or footer.
- When media exists, confirm images load, galleries initialize, lightboxes
  open, and video embeds belong to the correct event. Capture a screenshot
  to inspect layout; do not treat a successful HTTP response as visual proof.
- Ensure draft placeholders remain explicit and no copied race facts survive.
- Compare the report and index summary against the extracted PDF results and
   any explicitly approved SportSoft lookup;
   their shared times, time-range endpoints, category placings, and field sizes
   must agree. Verify any slow-tail exclusions without altering rankings. Keep
   narrative drafts separate from verified results.
- For web-verified overall results, check that the recorded competition URL,
   overall rank, and count of classified finishers agree in both pages. Never
   use the table's unfiltered entry count as a substitute for finishers.
- Summarize the changed pages, validation, and any missing information. Do
  not claim that unverified personal results or report text are complete.