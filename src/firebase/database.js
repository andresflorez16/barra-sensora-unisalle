import { getDatabase, ref, onValue, set, push } from 'firebase/database'

const db = getDatabase()

export const getData = async (barra, callback) => {
  const dbRef = ref(db, barra)
  onValue(dbRef, (snapshot) => {
    if (!snapshot.exists()) {
      callback(null)
    } else {
      const data = snapshot.val()
      const keys = ['ID', ...Object.keys(data).reverse()]
      const values = Object.values(data).reverse().map(value => {
        return Object.values(value).reverse()
      })
      const ids = Array(values[0].length).fill(0)
      callback({ keys, values, length: values[0].length, ids })
    }
  })
}

export const writeData = async ({ value }) => {
  const db = getDatabase()
  const newData = push(ref(db, 'Barra1/temp'))
  const newData2 = push(ref(db, 'Barra1/pres'))
  const newData3 = push(ref(db, 'Barra1/hum'))
  set(newData, value)
  set(newData2, value)
  set(newData3, value)
}
