import { getDatabase, ref, onValue } from 'firebase/database'

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

export const getDataStore = async (callback) => {
  const dbRef = ref(db)
  onValue(dbRef, (snapshot) => {
    if (!snapshot.exists()) {
      callback(null)
    } else {
      const data = snapshot.val()
      const barras = Object.keys(data)
      if (barras.length > 0) {
        const keys = ['ID']
        const values = barras.map(barra => {
          const variables = Object.keys(data[barra])
          variables.pop()
          keys.push('BARRA', 'FECHA', ...variables.reverse())
          const dataBarra = Object.values(data[barra]).reverse().map(value => {
            return Object.values(value).reverse()
          })
          return dataBarra
        })

        if (values.length > 0) {
          const dataBarra1 = values[0] || null
          const dataBarra2 = values[1] || null
          const dataBarra3 = values[2] || null

          const valuesLength = dataBarra1[0].length

          let dataValues = [keys]

          for (let j = 0; j < valuesLength; j++) {
            dataValues.push([
              valuesLength - (j + 1),
              'BARRA 1', dataBarra1[0][j], dataBarra1[1][j], dataBarra1[2][j], dataBarra1[3][j], dataBarra1[4][j], dataBarra1[5][j], dataBarra1[6][j], dataBarra1[7][j], dataBarra1[8][j],
              'BARRA 2', dataBarra2[0][j], dataBarra2[1][j], dataBarra2[2][j], dataBarra2[3][j], dataBarra2[4][j], dataBarra2[5][j], dataBarra2[6][j], dataBarra2[7][j], dataBarra2[8][j],
              'BARRA 3', dataBarra3[0][j], dataBarra3[1][j], dataBarra3[2][j], dataBarra3[3][j], dataBarra3[4][j], dataBarra3[5][j], dataBarra3[6][j], dataBarra3[7][j], dataBarra3[8][j]
            ])
          }

          callback(dataValues)
        }
      }
    }
  })
}
