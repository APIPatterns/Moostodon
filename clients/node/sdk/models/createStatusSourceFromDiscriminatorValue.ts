import {StatusSource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStatusSourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : StatusSource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StatusSource();
}
