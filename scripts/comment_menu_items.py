from pathlib import Path
import re

root = Path('.')
ids = ['menu-item-3689', 'menu-item-3853']

# Match opening li tag containing the target ID
li_open_re = re.compile(r'(<li[^>]*id="(?:' + '|'.join(re.escape(x) for x in ids) + r')"[^>]*>)', re.IGNORECASE)

for path in root.rglob('*.html'):
    text = path.read_text(encoding='utf-8', errors='ignore')
    if not any(id_ in text for id_ in ids):
        continue
    new_lines = []
    in_comment = False
    changed = False
    for line in text.splitlines(keepends=True):
        if in_comment:
            new_lines.append(line)
            if '</li>' in line:
                new_lines[-1] = new_lines[-1].replace('</li>', '</li> -->', 1)
                in_comment = False
                changed = True
            continue
        if li_open_re.search(line) and '<!--' not in line:
            # Comment start before the <li>
            if '</li>' in line:
                new_line = line.replace('<li', '<!-- <li', 1).replace('</li>', '</li> -->', 1)
                new_lines.append(new_line)
            else:
                new_lines.append(line.replace('<li', '<!-- <li', 1))
                in_comment = True
            changed = True
        else:
            new_lines.append(line)
    if changed:
        path.write_text(''.join(new_lines), encoding='utf-8')
        print(f'Updated {path}')
