import {Rule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Rule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Rule();
}
