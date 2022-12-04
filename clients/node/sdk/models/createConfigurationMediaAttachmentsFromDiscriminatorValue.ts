import {ConfigurationMediaAttachments} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConfigurationMediaAttachmentsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConfigurationMediaAttachments {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConfigurationMediaAttachments();
}
