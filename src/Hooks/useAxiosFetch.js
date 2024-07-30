import  { useState,useEffect } from 'react';
import axios from 'axios';

const useAxiosFetch = (dataUrl) => {

    // fetch data, set data 
    const [data, setData] = useState([]);
    //handle error 
    const [fetchError, setFetchError] = useState(null);
    // handle loading 
    const [isLoading, setIsLoading] = useState(false);
   
   
    useEffect(() => {

        //handle component mount -  component mount in dom, comp created in dom -->/
        // comp mount;// comp life cycle --> first comp initialized , then mount , 
        //then  changes will update ,
        //then unmount --> the comes out (leave)
        let isMounted = true;// comp loaded or not ?

        //comp rendering is different --> while changing state the component will render ;
        // At first time component  Load --> Mount --> ( isMounded )


        // if comp is not ready( not mounted) , then cancel the fetch req using axios ( see axios doc)
        const source = axios.CancelToken.source();

        // pass actual data --> to fetch  
        // For a data fetching --> we need try and catch and finally 
        const fetchData = async (url) => {

            // if loading completed set loading as true 
            setIsLoading(true);


            try {
                const response = await axios.get(url, {

                    // passing the cancel token details , is canceled or not 
                    cancelToken: source.token
                });

                // if mounted correctly then pass data to setData method ;
                
                if (isMounted) {
                    setData(response.data);
                    setFetchError(null); // if data is comes correctly then set the error as null 

                }
            }
// catch -->  handle if error exists 
            catch (err) {
                if (isMounted) {
                    setFetchError(err);
                    setData([]);  // empty the data 

                }

            }

            //loading , unloading state 
            finally {
                isMounted && setIsLoading(false);

            }
        }

        fetchData(dataUrl);

        // clean memory lekage 
        const cleanUp = () => {
            isMounted = false;
            source.cancel();

        }


        return cleanUp;

    }, [dataUrl]);

    return { data, fetchError, isLoading };

}

export default useAxiosFetch