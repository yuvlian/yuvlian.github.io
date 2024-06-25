document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tab-buttons').style.display = 'block';

    document.getElementById('licensed-heading').style.display = 'none';
    document.getElementById('licensed-table').style.display = 'none';
    document.getElementById('public-domain-heading').style.display = 'none';
    document.getElementById('public-domain-table').style.display = 'none';
});

function showTab(tabName) {
    document.getElementById('licensed-heading').style.display = 'none';
    document.getElementById('licensed-table').style.display = 'none';
    document.getElementById('public-domain-heading').style.display = 'none';
    document.getElementById('public-domain-table').style.display = 'none';

    if (tabName === 'licensed') {
        document.getElementById('licensed-heading').style.display = 'block';
        document.getElementById('licensed-table').style.display = 'block';
    } else if (tabName === 'publicDomain') {
        document.getElementById('public-domain-heading').style.display = 'block';
        document.getElementById('public-domain-table').style.display = 'block';
    }
}
