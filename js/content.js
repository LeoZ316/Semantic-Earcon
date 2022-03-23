setInterval(() =>
{
    let match = location.href.match(/https:\/\/github\.com(?:\/[^\/]+)*\/commit\/[0-9a-f]{40}/i)
    if (!match) return

    let additions = document.querySelectorAll('.blob-code-addition:not([lang]')
    additions.forEach(addition => addition.setAttribute('lang', 'en-US'))

    let deletions = document.querySelectorAll('.blob-code-deletion:not([lang]')
    deletions.forEach(deletion => deletion.setAttribute('lang', 'en-GB'))
}, 1000)

// Custom for lang tag and assign foucs + - and changed lines