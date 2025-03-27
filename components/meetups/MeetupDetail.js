import classes from "./MeetupDetail.module.css";
export default function MeetupDetail({ meeting }) {
  return (
    <>
      <section className={classes.detail}>
        <img src={meeting.image} alt={meeting.title} />
        <h1>{meeting.title}</h1>
        <address>{meeting.address}</address>
        <p>{meeting.description}</p>
      </section>
    </>
  );
}
