import {CreateStatusBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateStatusBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateStatusBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateStatusBody();
}
