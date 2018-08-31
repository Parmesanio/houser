module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db');

        db.get_homes()
            .then(response => res.send(response))
            .catch(err => console.log('Err in db.get_homes', err));
    },
    create: (req, res) => {
        const db = req.app.get('db');
        let { home_name, address, city, home_state, zip, home_url, mortgage, rent } = req.body;

        db.create_home([home_name, address, city, home_state, zip, home_url, mortgage, rent])
            .then(() => res.sendStatus(200))
            .catch(err => console.log('Err in db.create_home', err));
    },
    delete: (req, res) => {
        const db = req.app.get('db');
        let { id } = req.params;

        db.delete_home([id])
            .then(() => res.sendStatus(200))
            .catch(err => console.log('Err in db.delete', err));
    }
}