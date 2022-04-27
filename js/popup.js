window.onload = async () =>
{
    let { langAdd, langDel } = await chrome.storage.local.get({ langAdd: 'en-au', langDel: 'en-gb' })
    let langAddSelect = document.getElementById('language-add')
    let langDelSelect = document.getElementById('language-del')

    langAddSelect.value = langAdd
    langAddSelect.onchange = e => chrome.storage.local.set({ langAdd: langAddSelect.value })

    langDelSelect.value = langDel
    langDelSelect.onchange = e => chrome.storage.local.set({ langDel: langDelSelect.value })

    let commitBtn = document.getElementById('commit-btn')
    let cancelBtn = document.getElementById('cancel-btn')

    commitBtn.onclick = e => chrome.tabs.reload()
    cancelBtn.onclick = e => close()
}