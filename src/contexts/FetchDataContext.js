import React, {
  useState,
  createContext,
  useEffect
} from 'react'

export const FetchDataContext = createContext();

export const FetchDataProvider = (props) => {
  const defaultData = [{
    "sku": "1",
    "productName": "name1",
    "price": "13",
    "assignee": "Kate",
    "createdDate": "09-11-2019 23:15:30",
    "lastUpdated": "-"
  }, {
    "sku": "2",
    "productName": "name2",
    "price": "12",
    "assignee": "Joe",
    "createdDate": "09-11-2019 23:15:30",
    "lastUpdated": "-"
  }, {
    "sku": "3",
    "productName": "name3",
    "price": "10",
    "assignee": "Francoise",
    "createdDate": "08-10-2019 23:15:30",
    "lastUpdated": "-"
  }]
  // Main Data
  const [data, setUpdateData] = useState(defaultData)
  // Temporary Data Object. To use register new data
  const [inputs, setInputs] = useState({})
  // Binary Data. To handle Data Update
  const [isUpdated, setIsUpdated] = useState(false)
  // Temporary Data Object. To store adjusted data to update
  const [tempUpdates, setTempUpdates] = useState([])
  // Binary. To verify all inputs are filled
  const [isAnyBlank, setIsAnyBlank] = useState(false)

  useEffect(() => {
    localStorage.setItem('sku-cnt', data.length + 1)
  }, [])

  useEffect(() => {
    setTempUpdates(data)
  }, [data])


  return (
    <FetchDataContext.Provider value={[data, setUpdateData, inputs, setInputs, isUpdated, setIsUpdated, tempUpdates, setTempUpdates, isAnyBlank, setIsAnyBlank]}>
      {props.children}
    </FetchDataContext.Provider>
  )
}