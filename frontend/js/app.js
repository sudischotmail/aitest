document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('tenant-form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const tenantName = document.getElementById('tenant-name').value;
        const tenantEmail = document.getElementById('tenant-email').value;

        const response = await fetch('/api/tenants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: tenantName, email: tenantEmail })
        });

        if (response.ok) {
            alert('Tenant created successfully!');
            form.reset();
        } else {
            alert('Failed to create tenant.');
        }
    });
});
