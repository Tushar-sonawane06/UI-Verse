Param(
  [string]$Root = "."
)

Write-Output "Scanning for HTML files under: $Root"
$files = Get-ChildItem -Path $Root -Recurse -Filter *.html -File
foreach ($f in $files) {
  $path = $f.FullName
  Write-Output "Processing: $path"
  $text = Get-Content -LiteralPath $path -Raw -Encoding UTF8

  if ($text -notmatch 'theme-toggle\.css') {
    $text = $text -replace '(?i)</head>', "  <link rel=\"stylesheet\" href=\"theme-toggle.css\" />`n</head>"
  }
  if ($text -notmatch 'theme-toggle\.js') {
    $text = $text -replace '(?i)</body>', "  <script src=\"theme-toggle.js\" defer></script>`n</body>"
  }

  Set-Content -LiteralPath $path -Value $text -Encoding UTF8
}

Write-Output "Injection complete."
