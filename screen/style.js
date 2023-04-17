import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: '#6fb23e',
    flex: 1,
    overflow: "hidden",
    width :"100%",
  },
  container_1: {
    flex: 1,
    backgroundColor: '#E5E4E2',
  },
  container_2: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'space-between',
    padding:40,
    width: "100%",
  },
  heading: {
    color: '#ffff',
    fontSize: 30,
    fontWeight : "bold",
    
  },
  header_1:{
    width:'100%',
    backgroundColor: '#6fb23e',
    padding:20,
    height: 130,
    
  },
  heading2: {
    color: '#ffff',
    textAlign: 'center',
    top : 20,
    marginTop:20,
  },
  top: {
    top : 20,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:10,
  },
  title: {
    color: '#ffff',
    fontSize: 30,
    fontWeight : "bold",
    top: 30,
  },
  card: {
    backgroundColor: 'white',
    borderRadius:15,
    margin: "auto",
    padding:10,
    width: '90%',
    top: 20,
  },
  item: {
    backgroundColor: '#ffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:10,
  },
  head_sec: {
    fontWeight : "bold",
    fontSize: 16,
    margin: 3,
  },
  info:{
    alignItems:"center",
    marginTop: 20,
    marginBottom:10,
    flexDirection: "row",
    justifyContent:"space-between"
  },
  plane: {
    marginTop: 10,
    marginLeft: -15,
    marginBottom: -15,
  },
  date_info:{
    color:'blue',
  },
  plane_type:{
    marginLeft:-25,
    fontSize:20,
    fontWeight: "bold",
  },
  input_place: {
    width: '100%',
    borderColor: '#E5E5E5',
    alignItems: 'center',
    borderWidth:1,
    borderRadius:5,
    marginBottom:10,
    flexDirection:'row',
    paddingLeft:10,
    marginTop:10,
    
  },
  search: {
    backgroundColor: "#e67e1f",
    alignSelf: "center",
    color : '#ffff',
    borderRadius: 5,
    fontweight : "Bold",
    fontSize: 20,
    margin : 10,
    height: 30,
    width: '100%',
    textAlign: "center",
  },
  input: {
    width: '100%',
    height: 45,
    padding: 10,
  },
  footer: {
    flex:1,
    backgroundColor: '#EEE',
    borderRadius:25,
    width: "100%",
    marginTop : 0,
  },
  copyright: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 40,
    color : '#797979',
    marginTop: 'auto',
    padding : 10,
  },
  copyright_1: {
    textAlign: 'center',
    color : '#797979',
    fontWeight: 'bold',
    marginBottom: 10,
    padding:10,
    marginTop: 5,
  },
});