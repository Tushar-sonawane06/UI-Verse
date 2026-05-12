
$files = @("forms.html", "loaders.html", "map.html", "menu.html", "pricing.html", "span.html", "testimonials.html", "toggles.html")
foreach ($f in $files) {
    if (Test-Path $f) {
        $found = Select-String -Path $f -Pattern "class=.*component-card" | Select-Object -First 1
        if ($found) {
            $allLines = Get-Content $f
            $idx = $found.LineNumber - 1
            $c1 = ""
            if ($idx -ge 2) { $c1 = $allLines[$idx-2].Trim() }
            $c2 = ""
            if ($idx -ge 1) { $c2 = $allLines[$idx-1].Trim() }
            Write-Host "${f}: $($found.LineNumber): ($c1) ($c2)"
        } else {
            Write-Host "${f}: Not found"
        }
    } else {
        Write-Host "${f}: File not found"
    }
}
