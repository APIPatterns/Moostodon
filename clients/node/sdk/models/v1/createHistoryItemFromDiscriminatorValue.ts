import {HistoryItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHistoryItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : HistoryItem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new HistoryItem();
}
