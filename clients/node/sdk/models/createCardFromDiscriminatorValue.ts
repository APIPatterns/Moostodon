import {Card} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCardFromDiscriminatorValue(parseNode: ParseNode | undefined) : Card {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Card();
}
