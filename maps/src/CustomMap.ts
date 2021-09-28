import { User } from './User';
import { Company } from './Company';

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      center: { lat: 0, lng: 0 },
      zoom: 1,
    });
  }
  // Bad Code
  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      }
    })
  }
  // Bad Code
  addCompanyMarker(company: Company): void {

  }
}