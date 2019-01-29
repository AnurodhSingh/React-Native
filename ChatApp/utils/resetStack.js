import { NavigationActions, StackActions } from 'react-navigation';

export default function (navigation,...toRoute) {
    let routes = toRoute.map((object,index)=>{
        return(
            NavigationActions.navigate({ routeName: object })
        )
    });
	const resetAction = StackActions.reset({
		index: 0,
		actions: routes
	});
	navigation.dispatch(resetAction);
}
