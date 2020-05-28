import got from 'got';
import qs from 'qs';
import defaultValues from './defaultValues';

export default async function editTag(editedRequest){
    
    
    const requestParams = {
        id: editedRequest.question_id,
        tagged: editedRequest.tags,
        body: editedRequest.body,
        key: defaultValues.key,
    };

     objectParams['access_token'] = defaultValues.token;
     const paramsTags = qs.stringify(requestParams);
     let editURL = `https://api.stackexchange.com/2.2/questions/edit?${paramsTags}`;
    
     await got(editURL);

}