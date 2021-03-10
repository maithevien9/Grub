import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import icPlastic from '../../../../../Images/Icons/recycle.png';
import icHDPE1 from '../../../../../Images/ImagePlastic/HDPE/chaichattayrua64.png';
import icHDPE2 from '../../../../../Images/ImagePlastic/HDPE/chaidaugoi64.png';
import icHDPE3 from '../../../../../Images/ImagePlastic/HDPE/chaidaunhot64.png';
import icHDPE4 from '../../../../../Images/ImagePlastic/HDPE/chainuocxavai64.png';
import icHDPE5 from '../../../../../Images/ImagePlastic/HDPE/chaituongotchinsu64.png';
import icHDPE6 from '../../../../../Images/ImagePlastic/HDPE/cháiuatam64.png';
import icHDPE7 from '../../../../../Images/ImagePlastic/HDPE/hubo64.png';
import icHDPE8 from '../../../../../Images/ImagePlastic/HDPE/thungphuy64.png';

import icPET1 from '../../../../../Images/ImagePlastic/PET/BinhXitKinh.png';
import icPET2 from '../../../../../Images/ImagePlastic/PET/ChaiDam.png';
import icPET3 from '../../../../../Images/ImagePlastic/PET/ChaiDauAn.png';
import icPET4 from '../../../../../Images/ImagePlastic/PET/ChailoMyPham.png';
import icPET5 from '../../../../../Images/ImagePlastic/PET/ChaiNuoc.png';
import icPET6 from '../../../../../Images/ImagePlastic/PET/ChaiNuocEp.png';
import icPET7 from '../../../../../Images/ImagePlastic/PET/ChaiNuocLauSan.png';
import icPET8 from '../../../../../Images/ImagePlastic/PET/ChaiNuocMam.png';
import icPET9 from '../../../../../Images/ImagePlastic/PET/ChaiNuocRua.png';
import icPET10 from '../../../../../Images/ImagePlastic/PET/ChaiNuocSuoi.png';
import icPET11 from '../../../../../Images/ImagePlastic/PET/ChaiSua.png';
import icPET12 from '../../../../../Images/ImagePlastic/PET/ChaiTuongOt.png';
import icPET13 from '../../../../../Images/ImagePlastic/PET/ChaiXiDau.png';

import icPE1 from '../../../../../Images/ImagePlastic/PE/MangNhuaBocTrongSuot.png';
import icPE2 from '../../../../../Images/ImagePlastic/PE/TuiNhuaCoMau.png';
import icPE3 from '../../../../../Images/ImagePlastic/PE/TuiZipperTrongSuot.png';

import icExtant1 from '../../../../../Images/ImagePlastic/Extant/daydien.png';
import icExtant2 from '../../../../../Images/ImagePlastic/Extant/laphongnhua.png';
import icExtant3 from '../../../../../Images/ImagePlastic/Extant/ongnhua.png';
import icExtant4 from '../../../../../Images/ImagePlastic/Extant/thietbidien.png';
import icExtant5 from '../../../../../Images/ImagePlastic/Extant/thietbidientu.png';

const View1 = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [Extant, setExtant] = useState([
    {
      ID: 1,
      Image: icExtant1,
      Name: t('Linear'),
    },
    {
      ID: 2,
      Image: icExtant2,
      Name: t('PlasticMapleLeaf'),
    },
    {
      ID: 3,
      Image: icExtant3,
      Name: t('PlasticPipe'),
    },
    {
      ID: 4,
      Image: icExtant4,
      Name: t('ElectricalEquipment'),
    },
    {
      ID: 5,
      Image: icExtant5,
      Name: t('ElectronicDevice'),
    },
  ]);
  const [PE, setPE] = useState([
    {
      ID: 1,
      Image: icPE1,
      Name: t('TransparentPlasticWrap'),
    },
    {
      ID: 2,
      Image: icPE2,
      Name: t('ColoredPlasticBags'),
    },
    {
      ID: 3,
      Image: icPE3,
      Name: t('ZipperBagInSmooth'),
    },
  ]);
  const [HDPE, setHDPE] = useState([
    {
      ID: 1,
      Image: icHDPE1,
      Name: t('DetergentBottle'),
    },
    {
      ID: 2,
      Image: icHDPE2,
      Name: t('ShampooBottle'),
    },
    {
      ID: 3,
      Image: icHDPE3,
      Name: t('VehicleOilBottle'),
    },
    {
      ID: 4,
      Image: icHDPE4,
      Name: t('FabricSoftenerBottle'),
    },
    {
      ID: 5,
      Image: icHDPE5,
      Name: t('BottleOfChinsu'),
    },
    {
      ID: 6,
      Image: icHDPE6,
      Name: t('BottleOfShowerGel'),
    },
    {
      ID: 7,
      Image: icHDPE7,
      Name: t('Butterbowl'),
    },
    {
      ID: 8,
      Image: icHDPE8,
      Name: t('BarrelsOfWater'),
    },
  ]);
  const [PET, setPET] = useState([
    {
      ID: 1,
      Image: icPET1,
      Name: t('GlassSprayBottle'),
    },
    {
      ID: 2,
      Image: icPET2,
      Name: t('VinegarBottle'),
    },
    {
      ID: 3,
      Image: icPET3,
      Name: t('CookingOilBottle'),
    },
    {
      ID: 4,
      Image: icPET4,
      Name: t('CosmeticBottle'),
    },
    {
      ID: 5,
      Image: icPET5,
      Name: t('WaterBottles'),
    },
    {
      ID: 6,
      Image: icPET6,
      Name: t('JuiceBottles'),
    },
    {
      ID: 7,
      Image: icPET7,
      Name: t('FloorCleaner'),
    },
    {
      ID: 8,
      Image: icPET8,
      Name: t('FishSauceBottle'),
    },
    {
      ID: 9,
      Image: icPET9,
      Name: t('WashingWaterBottle'),
    },
    {
      ID: 10,
      Image: icPET10,
      Name: t('MineralWaterBottle'),
    },
    {
      ID: 11,
      Image: icPET11,
      Name: t('MilkBottle'),
    },
    {
      ID: 12,
      Image: icPET12,
      Name: t('ChiliSauceBottle'),
    },
    {
      ID: 13,
      Image: icPET13,
      Name: t('SoySauceBottle'),
    },
  ]);
  const HandleRecyclables = (ID, Score, Unit, Name, Image, ListProduct) => {
    navigation.navigate('CategoryDetail', {
      ID,
      Score,
      Unit,
      Name,
      Image,
      ListProduct,
    });
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperPlastic}>
        <View style={styles.wrapperMain1}>
          <View style={styles.wrapperheaderPlastic}>
            <TouchableOpacity
              style={styles.wrapperheader2Plactic}
              onPress={() => {
                HandleRecyclables(1, 4000, '1/Kg', 'HDPE', icPlastic, HDPE);
              }}>
              <Image source={icPlastic} style={styles.wrapperImage2} />
              <Text style={styles.wrapperTextHeader2}>HDPE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wrapperheader2Plactic}
              onPress={() => {
                HandleRecyclables(2, 4000, '1/Kg', 'PET', icPlastic, PET);
              }}>
              <Image source={icPlastic} style={styles.wrapperImage2} />
              <Text style={styles.wrapperTextHeader2}>PET</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.wrapperMain1}>
          <View style={styles.wrapperheaderPlastic}>
            <TouchableOpacity
              style={styles.wrapperheader2Plactic}
              onPress={() => {
                HandleRecyclables(3, 3000, '1/Kg', 'PE', icPlastic, PE);
              }}>
              <Image source={icPlastic} style={styles.wrapperImage2} />
              <Text style={styles.wrapperTextHeader2}>PE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wrapperheader2Plactic}
              onPress={() => {
                HandleRecyclables(
                  4,
                  3000,
                  '1/Kg',
                  t('Extant'),
                  icPlastic,
                  Extant,
                );
              }}>
              <Image source={icPlastic} style={styles.wrapperImage2} />
              <Text style={styles.wrapperTextHeader2}>{t('Extant')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
  },
  wrapperBtn: {
    height: 80,
    width: '90%',
    backgroundColor: 'yellow',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperMain1: {
    height: '16%',
    marginTop: '23%',
  },
  wrapperMain2Parient: {
    height: '45%',
    width: '45.5%',

    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperText: {
    fontSize: 28,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  wrapperMain2: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperMain3: {
    height: '30%',
  },
  wrapperMain3plastic: {
    height: '10%',
  },
  wrapperHeader: {
    marginTop: '5%',
    marginBottom: '20%',

    alignItems: 'center',
  },
  Textheader: {
    fontSize: 25,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  wrapperMain: {
    width: '100%',
    alignItems: 'center',
    marginTop: '25%',
  },
  TextBtn: {
    fontSize: 20,
    fontFamily: 'Roboto',
  },
  wrapperPlastic: {
    marginTop: '12%',
    width: '96%',
    borderRadius: 40,
    marginLeft: '2%',
    marginBottom: '10%',
  },
  wrapperheaderPlastic: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: '7%',
    marginTop: '3%',
  },
  wrapperTextHeader: {
    fontSize: 13,
    fontFamily: 'Roboto',
  },
  wrapperTextHeaderPlastic: {
    fontSize: 19,
    fontFamily: 'Roboto',
  },
  wrapperImage: {
    height: 45,
    width: 45,
    marginTop: '4%',
  },
  wrapperheader2Plactic: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#009966',
    height: '175%',
    width: '45%',
    // eslint-disable-next-line no-dupe-keys
    alignItems: 'center',
    // eslint-disable-next-line no-dupe-keys
    justifyContent: 'center',
    borderRadius: 15,
  },
  wrapperBottomPlastic: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  wrapperPaper: {
    height: 250,
    width: '96%',

    borderWidth: 2,
    borderRadius: 40,
    marginLeft: '2%',
    marginBottom: '10%',
    borderStyle: 'dashed',
  },
  wrapperTextHeader2: {
    fontSize: 13,
    fontFamily: 'Roboto',
    marginTop: '5%',
    fontWeight: 'bold',
  },
  wrapperheaderMetal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: '7%',
    marginTop: '3%',
  },
  wrapperImage2: {
    height: 35,
    width: 35,
    marginTop: '4%',
  },
});
export default View1;
