"""Build the eight classroom PowerPoint decks.

The implementation is split into ``presentations/generator_parts`` so the
source remains versionable without depending on files outside the repository.
The fragments are concatenated in lexical order and executed as one Python
module.  They contain the design system, slide helpers and the eight deck
builders.
"""

from pathlib import Path

HERE = Path(__file__).resolve().parent
PARTS_DIR = HERE / "generator_parts"
parts = sorted(PARTS_DIR.glob("part-*.pyfrag"))

if len(parts) != 8:
    raise RuntimeError(
        f"Expected 8 presentation generator parts in {PARTS_DIR}, found {len(parts)}"
    )

source = "".join(part.read_text(encoding="utf-8") for part in parts)
exec(compile(source, str(PARTS_DIR / "combined-generator.py"), "exec"), globals(), globals())
