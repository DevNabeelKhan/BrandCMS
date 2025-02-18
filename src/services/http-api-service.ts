import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { AlertService } from "./alert.service";

@Injectable({
    providedIn: 'root'
})
export class HttpApiService {
    userForm: any;

    constructor(readonly httpService: HttpService, readonly alert: AlertService) { }
    async ChangePassword(body: any): Promise<any> {
        return await this.httpService.post<any>('auth/change-password', body) 
    }
    async getCountries(): Promise<any> {
        return await this.httpService.getAsync<any>('Common/get-all-countries');
    }
    async getCities(stateId: any): Promise<any> {
        return await this.httpService.getAsync<any>('Common/get-all-cities', { stateId: stateId });
    }
   
    async AddFaculty(body: any): Promise<any> {
        const formData = new FormData();
        formData.append('ProjectId', body.ProjectId);
        formData.append('Date', body.Date);
        if (body.Id) formData.append('Id', body.Id);
        if (body.CNIC)formData.append('CNIC', body.CNIC);
        if (body.GenderId)formData.append('GenderId', body.GenderId);
        if (body.FirstName)formData.append('FirstName', body.FirstName);
        if (body.LastName)formData.append('LastName', body.LastName);
        if (body.FatherName)formData.append('FatherName', body.FatherName);
        if (body.Address)formData.append('Address', body.Address);
        if (body.DOB)formData.append('DOB', body.DOB);
        if (body.Age)formData.append('Age', body.Age);
        if (body.ReligionId)formData.append('ReligionId', body.ReligionId);
        if (body.QualificationId)formData.append('QualificationId', body.QualificationId);
        if (body.Experience)formData.append('Experience', body.Experience);
        if (body.PhoneNo)formData.append('PhoneNo', body.PhoneNo);
        if (body.MobileNo)formData.append('MobileNo', body.MobileNo);
        if (body.WhatsAppNo)formData.append('WhatsAppNo', body.WhatsAppNo);
        if (body.Email)formData.append('Email', body.Email);
        if (body.DisabilityId)formData.append('DisabilityId', body.DisabilityId);
        if (body.CauseDisabilityId)formData.append('CauseDisabilityId', body.CauseDisabilityId);
        if (body.Reference)formData.append('Reference', body.Reference);
        if (body.NeedsRemarks)formData.append('NeedsRemarks', body.NeedsRemarks);
        if (body.CountryId)formData.append('CountryId', body.CountryId);
        if (body.CityId)formData.append('CityId', body.CityId);
        if (body.BusinessName)formData.append('BusinessName', body.BusinessName);
        if (body.BusinessType)formData.append('BusinessType', body.BusinessType);
        if (body.BeneficiaryTypeId)formData.append('BeneficiaryTypeId', body.BeneficiaryTypeId);
        if (body.Image) formData.append('Image', body.Image);
        if (body.attachProfilePicture) formData.append('attachProfilePicture', body.attachProfilePicture);
        return await this.httpService.postFormData<any>('Admin/insert-update-beneficiary', formData)

    }
    

}