import { createContext, useState } from "react";

export const PeopleContext = createContext();

export const PeopleProvider = ({ children }) => {
    const [people, setPeople] = useState({
        status: 200,
        profileSummary: null,
        profile: null
    });

    const dispatch = (action, payload) => {
        switch (action) {
            case 'SET_DATA_SUMMARY':
                console.log('SET_DATA_SUMMARY')
                setPeople({
                    ...people,
                    profileSummary: payload.people,
                    status: 200
                })
                break;
            case 'SET_DATA_PROFILE':
                console.log('SET_DATA_PROFILE')
                setPeople({
                    ...people,
                    profile: payload.people,
                    status: 200
                })
                break;
            case 'SERVICE_DOWN':
                setPeople({
                    ...people,
                    status: 503
                })
                break;
            case 'NO_RESPONSE':
                setPeople({
                    ...people,
                    status: 204
                })
                break;
            // no default
        }
    }

    return <>
        <PeopleContext.Provider value={[people, dispatch]}>
            {children}
        </PeopleContext.Provider>
    </>
}
