const originalAnswerParams  = {
    'items': [
        {
            'tags': [
                'testcafe'
            ],
            'owner': {
                'reputation':    86,
                'user_id':       1087185,
                'user_type':     'registered',
                'accept_rate':   27,
                'profile_image': 'https://www.gravatar.com/avatar/aa227a526e5ac24d074373ba64729f9d?s=128&d=identicon&r=PG',
                'display_name':  'user1087185',
                'link':          'https://stackoverflow.com/users/1087185/user1087185'
            },
            'is_answered':        false,
            'view_count':         13,
            'answer_count':       1,
            'score':              0,
            'last_activity_date': 1585904311,
            'creation_date':      1585779605,
            'question_id':        60981232,
            'link':               'https://stackoverflow.com/questions/60981232/testcafe-how-do-you-wait-for-the-before-hook-to-complete-before-loading-the',
            'title':              'Testcafe - How do you wait for the `before` hook to complete before loading the page'
        }
    ],
    'has_more':        false,
    'quota_max':       10000,
    'quota_remaining': 9964
};

const updatedAnswerParams = {
    'items': [
        {
            'tags': [
                'testcafe'
            ],
            'owner': {
                'reputation':    5,
                'user_id':       12991012,
                'user_type':     'registered',
                'profile_image': 'https://lh4.googleusercontent.com/-NPJ6ZI8xfAc/AAAAAAAAAAI/AAAAAAAAAAA/AKF05nDkssVVTCrdwkXhzuv1fwax3Mq4aA/photo.jpg?sz=128',
                'display_name':  'Herawati Manurung',
                'link':          'https://stackoverflow.com/users/12991012/herawati-manurung'
            },
            'is_answered':        false,
            'view_count':         18,
            'answer_count':       1,
            'score':              0,
            'last_activity_date': 1585902308,
            'creation_date':      1585812429,
            'question_id':        60986279,
            'link':               'https://stackoverflow.com/questions/60986279/how-to-typetext-in-textarea-which-have-dynamic-element',
            'title':              'How to typetext in textarea which have dynamic element?'
        }
    ],
    'has_more':        false,
    'quota_max':       10000,
    'quota_remaining': 9963
};

module.exports.originalAnswer = JSON.stringify(originalAnswerParams);
module.exports.updatedAnswer = JSON.stringify(updatedAnswerParams);

