window.onload = async () =>
{
    let { langAdd, langDel } = await chrome.storage.local.get({ langAdd: 'en-GB', langDel: 'en-AU' })
    let langAddSelect = document.getElementById('language-add')
    let langDelSelect = document.getElementById('language-del')

    langAddSelect.value = langAdd
    langAddSelect.onchange = e => chrome.storage.local.set({ langAdd: langAddSelect.value })

    langDelSelect.value = langDel
    langDelSelect.onchange = e => chrome.storage.local.set({ langDel: langDelSelect.value })
}