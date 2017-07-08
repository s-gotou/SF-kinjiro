import { WorkingRecord } from "./working-record";

export class ApplicationUser implements IApplicationUser {
    isEnabled?: boolean | undefined;
    createdDate?: Date | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    readonly name?: string | undefined;
    workingRecords?: WorkingRecord[] | undefined;
    id?: number | undefined;
    userName?: string | undefined;
    normalizedUserName?: string | undefined;
    email?: string | undefined;
    normalizedEmail?: string | undefined;
    emailConfirmed?: boolean | undefined;
    passwordHash?: string | undefined;
    securityStamp?: string | undefined;
    concurrencyStamp?: string | undefined;
    phoneNumber?: string | undefined;
    phoneNumberConfirmed?: boolean | undefined;
    twoFactorEnabled?: boolean | undefined;
    lockoutEnd?: Date | undefined;
    lockoutEnabled?: boolean | undefined;
    accessFailedCount?: number | undefined;

    constructor(data?: IApplicationUser) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.isEnabled = data["isEnabled"];
            this.createdDate = data["createdDate"] ? new Date(data["createdDate"].toString()) : <any>undefined;
            this.firstName = data["firstName"];
            this.lastName = data["lastName"];
            (<any>this).name = data["name"];
            if (data["workingRecords"] && data["workingRecords"].constructor === Array) {
                this.workingRecords = [];
                for (let item of data["workingRecords"])
                    this.workingRecords.push(WorkingRecord.fromJS(item));
            }
            this.id = data["id"];
            this.userName = data["userName"];
            this.normalizedUserName = data["normalizedUserName"];
            this.email = data["email"];
            this.normalizedEmail = data["normalizedEmail"];
            this.emailConfirmed = data["emailConfirmed"];
            this.passwordHash = data["passwordHash"];
            this.securityStamp = data["securityStamp"];
            this.concurrencyStamp = data["concurrencyStamp"];
            this.phoneNumber = data["phoneNumber"];
            this.phoneNumberConfirmed = data["phoneNumberConfirmed"];
            this.twoFactorEnabled = data["twoFactorEnabled"];
            this.lockoutEnd = data["lockoutEnd"] ? new Date(data["lockoutEnd"].toString()) : <any>undefined;
            this.lockoutEnabled = data["lockoutEnabled"];
            this.accessFailedCount = data["accessFailedCount"];
        }
    }

    static fromJS(data: any): ApplicationUser {
        let result = new ApplicationUser();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["isEnabled"] = this.isEnabled;
        data["createdDate"] = this.createdDate ? this.createdDate.toISOString() : <any>undefined;
        data["firstName"] = this.firstName;
        data["lastName"] = this.lastName;
        data["name"] = this.name;
        if (this.workingRecords && this.workingRecords.constructor === Array) {
            data["workingRecords"] = [];
            for (let item of this.workingRecords)
                data["workingRecords"].push(item.toJSON());
        }
        data["id"] = this.id;
        data["userName"] = this.userName;
        data["normalizedUserName"] = this.normalizedUserName;
        data["email"] = this.email;
        data["normalizedEmail"] = this.normalizedEmail;
        data["emailConfirmed"] = this.emailConfirmed;
        data["passwordHash"] = this.passwordHash;
        data["securityStamp"] = this.securityStamp;
        data["concurrencyStamp"] = this.concurrencyStamp;
        data["phoneNumber"] = this.phoneNumber;
        data["phoneNumberConfirmed"] = this.phoneNumberConfirmed;
        data["twoFactorEnabled"] = this.twoFactorEnabled;
        data["lockoutEnd"] = this.lockoutEnd ? this.lockoutEnd.toISOString() : <any>undefined;
        data["lockoutEnabled"] = this.lockoutEnabled;
        data["accessFailedCount"] = this.accessFailedCount;

        return data;
    }
}

export interface IApplicationUser {
    isEnabled?: boolean | undefined;
    createdDate?: Date | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    name?: string | undefined;
    workingRecords?: WorkingRecord[] | undefined;
    id?: number | undefined;
    userName?: string | undefined;
    normalizedUserName?: string | undefined;
    email?: string | undefined;
    normalizedEmail?: string | undefined;
    emailConfirmed?: boolean | undefined;
    passwordHash?: string | undefined;
    securityStamp?: string | undefined;
    concurrencyStamp?: string | undefined;
    phoneNumber?: string | undefined;
    phoneNumberConfirmed?: boolean | undefined;
    twoFactorEnabled?: boolean | undefined;
    lockoutEnd?: Date | undefined;
    lockoutEnabled?: boolean | undefined;
    accessFailedCount?: number | undefined;
}
