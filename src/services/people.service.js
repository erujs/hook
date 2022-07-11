export class PeopleService {
    async initData(uid, sid) {
        const res = await fetch('https://project-populus-default-rtdb.firebaseio.com/user/' + uid + '/' + sid + '.json')
        return await res;
    }

    // async updateData(uid, sid, data) {
    //     const res = await fetch('https://cors-anywhere.herokuapp.com/https://project-populus-default-rtdb.firebaseio.com/user/' + uid + '/' + sid + '.json', {
    //         method: 'POST', // or 'PUT'
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data),
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         // dispatch(setData(data, sid))
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     });
    // }
}
