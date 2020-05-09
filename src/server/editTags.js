import got from 'got';
import qs from 'qs';
import defaultValues from './defaultValues';

export default async function editTag(oldData,newTags){
    
    let newArrayOfTags = oldData.tags.concat(newTags);
    const requestParams = {
        id: oldData.id,
        tagged: newArrayOfTags,
        question_id:'61687502',
        body: oldData.body,
        key: defaultValues.key,
    };
    objectParams['access_token'] = defaultValues.token;
    const paramsTags = qs.stringify(requestParams);
    let editURL = `https://api.stackexchange.com/2.2/questions/edit?${paramsTags}`;
    
    await got(editURL);

}