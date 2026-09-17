"""Build the classroom PowerPoint decks, including the course overview deck 00.

The implementation is split into ``presentations/generator_parts`` so the
source remains versionable without depending on files outside the repository.
The fragments are concatenated in lexical order and executed as one Python
module. They contain the design system, slide helpers, the eight day decks and
the introductory course overview deck.
"""

from pathlib import Path

HERE = Path(__file__).resolve().parent
PARTS_DIR = HERE / "generator_parts"
parts = sorted(PARTS_DIR.glob("part-*.pyfrag"))

if len(parts) != 9:
    raise RuntimeError(
        f"Expected 9 presentation generator parts in {PARTS_DIR}, found {len(parts)}"
    )

source = "".join(part.read_text(encoding="utf-8") for part in parts)
exec(compile(source, str(PARTS_DIR / "combined-generator.py"), "exec"), globals(), globals())
